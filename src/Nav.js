import React, { useContext } from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { AppBar, Button, Toolbar, Typography, Link } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';
import { logout } from './util/helpers';
import AuthContext from './AuthContext';


const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    marginBottom: '1.5rem',
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
    letterSpacing: 1,
    textDecoration: 'none',
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

const Nav = () => {
  const classes = useStyles();
  const history = useHistory();
  const { token, setToken } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    setToken(null);
    history.push('/login');
  }

  return (
    <>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}
            component={RouterLink} to="/">
            Jobly
          </Typography>
          <nav>
            {token ? (
              <>
                <Link variant="button" color="textPrimary" className={classes.link}
                  component={RouterLink} to="/companies">
                  Companies
                  </Link>
                <Link variant="button" color="textPrimary" className={classes.link}
                  component={RouterLink} to="/jobs">
                  Jobs
                  </Link>
                <Button color="default" variant="text" className={classes.link}
                  component={RouterLink} to="/profile">
                  <AccountCircleIcon />
                </Button>
                <Button color="primary" variant="outlined" className={classes.link}
                  onClick={handleLogout} >
                  Logout
                </Button>
              </>
            ) : (
                <Button color="primary" variant="outlined" className={classes.link}
                  component={RouterLink} to="/login">
                  Login
                </Button>
              )
            }
          </nav>
        </Toolbar>
      </AppBar>
    </>
  );
}


export default Nav;