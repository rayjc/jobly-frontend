import React, { useState, useEffect } from 'react';
import CompanyApi from './api/CompanyApi';
import Search from './util/Search';
import { Container } from '@material-ui/core';


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
      <Container>
        <Search setter={setCompanies} reqFn={CompanyApi.getCompanies} />
        {/* {companies.map(company => <CompanyCard {...company} />)} */}
        {companies.map(company => <p key={company.name}>{company.name}</p>)}
      </Container>
    </div>
  )
}


export default Companies;