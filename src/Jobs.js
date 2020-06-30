import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, CircularProgress, Container, Grid } from '@material-ui/core';
import queryString from 'query-string';
import JobApi from './api/JobApi'
import JobCard from './JobCard';
import Search from './util/Search';


const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const location = useLocation();

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
                <JobCard {...job} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  )
}


export default Jobs;