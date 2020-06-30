import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import queryString from 'query-string';
import CompanyApi from './api/CompanyApi';
import CompanyCard from './CompanyCard';
import Search from './util/Search';
import { CircularProgress, Container, Grid, Box } from '@material-ui/core';


const Companies = () => {
  const [companies, setCompanies] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const initCompanies = async () => {
      const data = await CompanyApi.getCompanies(queryString.parse(location.search));
      setCompanies(() => data);
    }

    initCompanies();
  }, [location]);

  if (companies.length === 0) {
    return (
      <div style={{ textAlign: "center" }}>
        <CircularProgress />
      </div>
    )
  }

  return (
    <div className="Companies">
      <Search />
      <Container>
        <Box my={4}>
          <Grid container justify="center" alignItems="flex-start" spacing={3}>
            {companies.map(company => (
              <Grid item sm={12} md={6} key={company.handle}>
                <CompanyCard {...company} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  )
}


export default Companies;