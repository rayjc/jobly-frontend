import React, { useState } from 'react';
import { Box, Container, Paper, Tab, Tabs } from '@material-ui/core';
import Login from './Login';
import Signup from './Signup';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  );
}

const Auth = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Container maxWidth="xs">
      <Paper square>
        <Tabs
          value={tabValue}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          centered
          aria-label="login and signup form"
        >
          <Tab label="Login" />
          <Tab label="Signup" />
        </Tabs>
      </Paper>
      <TabPanel value={tabValue} index={0}>
        <Login />
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <Signup />
      </TabPanel>
    </Container>
  )
}


export default Auth;