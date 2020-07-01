import React, { useContext } from 'react';
import { Link as RouterLink, NavLink, useHistory } from 'react-router-dom';
import { AppBar, Button, Toolbar, Typography, Link } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';
import AuthContext from './util/AuthContext';
import './Nav.css';


const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    marginBottom: '1.5rem',
    boxShadow: `0 1px 2px grey`
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
    setToken(null);
    history.push('/login');
  }

  return (
    <div className="Nav">
      <AppBar position="static" color="white" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}
            component={RouterLink} to="/">
            Jobly
          </Typography>
          <nav>
            {token ? (
              <>
                <Link variant="button" color="textPrimary" className={classes.link}
                  component={NavLink} to="/companies">
                  Companies
                  </Link>
                <Link variant="button" color="textPrimary" className={classes.link}
                  component={NavLink} to="/jobs">
                  Jobs
                  </Link>
                <Button color="default" variant="text" className={classes.link}
                  component={NavLink} to="/profile">
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
    </div>
  );
}


export default Nav;