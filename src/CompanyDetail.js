import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, Container, Grid } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import CompanyApi from './api/CompanyApi';
import JobCard from './JobCard';


const CompanyDetail = () => {
  const { handle } = useParams();
  const [company, setCompany] = useState(null);

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
              <JobCard {...job} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}


export default CompanyDetail;