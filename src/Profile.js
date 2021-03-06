import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import UserApi from './api/UserApi';
import Alerts from './util/Alerts';
import AuthContext from './util/AuthContext';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Profile() {
  const { currUser, setCurrUser } = useContext(AuthContext);
  // console.log(currUser);
  const classes = useStyles();
  const INIT_FORM_STATE = {
    first_name: currUser.first_name,
    last_name: currUser.last_name,
    email: currUser.email,
    photo_url: currUser.photo_url || "",
    password: "",
  };
  const [formData, setFormData] = useState(INIT_FORM_STATE);
  const [formErrors, setFormErrors] = useState([])
  const history = useHistory();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData(f => ({ ...f, [name]: value }));
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setFormErrors([]);    // reset alert
    try {
      if (formData.photo_url.length === 0) {
        const { photo_url, ...data } = formData;
        await UserApi.updateUser(currUser.username, data)
      } else {
        await UserApi.updateUser(currUser.username, { ...formData })
      }

      const updatedUser = { ...currUser, ...formData };
      delete updatedUser.password;
      if (formData.photo_url.length === 0) {
        updatedUser.photo_url = null;
      }
      setCurrUser(updatedUser);
      setFormData(INIT_FORM_STATE);   // empty out forms
      history.push('/');
    } catch (error) {
      // show alerts
      setFormErrors(error);
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                value={currUser.username}
                disabled
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="first_name"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                value={formData.first_name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="last_name"
                autoComplete="lname"
                value={formData.last_name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="photoUrl"
                label="Photo URL"
                name="photo_url"
                value={formData.photo_url}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Verify Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={formData.password}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          {formErrors.length !== 0 && <Alerts points={formErrors} />}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={
              formData.first_name.length === 0 || formData.last_name.length === 0
              || formData.email.length === 0 || formData.password.length === 0
            }
          >
            Update
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}