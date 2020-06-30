import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';
import { IconButton, TextField, Box, Grid } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';


const Search = ({ label = "Search" }) => {
  const INIT_FORM_STATE = {
    "search": ""
  }
  const [formData, setFormData] = useState(INIT_FORM_STATE);

  const history = useHistory();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData(f => ({ ...f, [name]: value }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = `${history.location.pathname}?${queryString.stringify({ "search": formData.search })}`;
    history.push(url);
  }

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <Grid container justify="center">
        <Box width="50%">
          <TextField id="search-input" label={label} placeholder="Enter search term..."
            name="search" value={formData.search} onChange={handleChange} fullWidth />
        </Box>
        <IconButton className="Search-btn" aria-label="search">
          <SearchIcon />
        </IconButton>
      </Grid>
    </form >
  )
}


export default Search;