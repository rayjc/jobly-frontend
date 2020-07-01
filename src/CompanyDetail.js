import React, { useEffect, useState, useContext } from 'react';
import { Box, CircularProgress, Container, Grid } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import CompanyApi from './api/CompanyApi';
import JobCard from './JobCard';
import AuthContext from './util/AuthContext';
import JobApi from './api/JobApi';


const CompanyDetail = () => {
  const { currUser, setCurrUser } = useContext(AuthContext);
  const { handle } = useParams();
  const [company, setCompany] = useState(null);
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
    const initCompany = async () => {
      const data = await CompanyApi.getCompany(handle);
      setCompany(() => data);
    }

    initCompany();
  }, [handle]);

  if (!company) {
    return <CircularProgress />
  }

  return (
    <Container maxWidth="lg">
      <h2>{company.name}</h2>
      <p>{company.description}</p>
      <Box my={4}>
        <Grid container justify="center" alignItems="flex-start" spacing={3}>
          {company.jobs.map(job => (
            <Grid item sm={12} md={6} key={job.id}>
              <JobCard {...job}
                hasApplied={appTable.hasOwnProperty(job.id) && appTable[job.id] === "applied"}
                handleApply={handleApply} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}


export default CompanyDetail;