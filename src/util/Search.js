import React, { useState } from 'react';
import { IconButton, TextField, Container, Box, Grid } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';


const Search = ({ reqFn, setter, label = "Search" }) => {
  const INIT_FORM_STATE = {
    "search": ""
  }
  const [formData, setFormData] = useState(INIT_FORM_STATE);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData(f => ({ ...f, [name]: value }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setter(await reqFn({ "search": formData.search }));
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