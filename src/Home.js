import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AuthContext from './util/AuthContext';


const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(12),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(5),
    },
    textAlign: "center",
    borderRadius: 10,
  },
  heading: {
    fontWeight: 'bold',
  },
  caption: {
    fontStyle: 'italic',
  }
}));

const Home = () => {
  const { currUser } = useContext(AuthContext);
  const classes = useStyles();

  return (
    <main className={classes.layout}>
      <Paper className={classes.paper}>
        <Typography className={classes.heading} component="h1" variant="h4" align="center" gutterBottom>Jobly</Typography>
        <Box my={2}>
          <Typography className={classes.caption} component="p" variant="body1" color="textSecondary" align="center" gutterBottom>
            All jobs in one for minimalists!
          </Typography>
        </Box>
        {currUser ?
          <Typography className={classes.heading} component="h5" variant="h5" align="center" gutterBottom>
            Welcome back! <span style={{ fontStyle: 'italic' }}>{currUser.username}</span>
          </Typography>
          :
          <Button color="primary" variant="contained"
            component={Link} to="/login">
            Login
          </Button>
        }
      </Paper>
    </main>
  )
}


export default Home;