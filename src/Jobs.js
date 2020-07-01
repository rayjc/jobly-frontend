import React, { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, CircularProgress, Container, Grid } from '@material-ui/core';
import queryString from 'query-string';
import JobApi from './api/JobApi'
import JobCard from './JobCard';
import Search from './util/Search';
import AuthContext from './util/AuthContext';


const Jobs = () => {
  const { currUser, setCurrUser } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);
  const location = useLocation();
  // construct a map of (job id, state) based on jobs attached to currUser
  // Note: this used to index for jobs as opposed to checking currUser.jobs array
  const INIT_APP_TABLE_STATE = currUser.jobs.reduce((table, job) => {
    table[job.id] = job.state;
    return table;
  }, {});
  const [appTable, setAppTable] = useState(INIT_APP_TABLE_STATE);

  const handleApply = async (id, title, company_handle) => {
    try {
      const state = await JobApi.applyForJob(id);
      // update application table
      setAppTable(table => ({ ...table, [id]: state }))
      // update jobs attached to currUser
      setCurrUser(u => ({
        ...u,
        jobs: [...u.jobs, { id, title, company_handle, state }]
      }));
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    const initJobs = async () => {
      const data = await JobApi.getJobs(queryString.parse(location.search))
      setJobs(() => data);
    }

    initJobs();
  }, [location])

  if (jobs.length === 0) {
    return (
      <div style={{ textAlign: "center" }}>
        <CircularProgress />
      </div>
    )
  }

  return (
    <div className="Jobs">
      <Search />
      <Container>
        <Box my={4}>
          <Grid container justify="center" alignItems="flex-start" spacing={3}>
            {jobs.map(job => (
              <Grid item sm={12} md={6} key={job.id}>
                <JobCard {...job}
                  hasApplied={appTable.hasOwnProperty(job.id) && appTable[job.id] === "applied"}
                  handleApply={handleApply} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  )
}


export default Jobs;