import React, { useState, useEffect } from 'react';
import CompanyApi from './api/CompanyApi';
import CompanyCard from './CompanyCard';
import Search from './util/Search';
import { Container, Grid, Box } from '@material-ui/core';


const Companies = (props) => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const initCompanies = async () => {
      const data = await CompanyApi.getCompanies();
      setCompanies(companies => data);
    }

    initCompanies();
  }, []);

  return (
    <div className="Companies">
      <Search setter={setCompanies} reqFn={CompanyApi.getCompanies} />
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