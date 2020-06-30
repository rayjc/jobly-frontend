import React from 'react';
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  button: {
    marginLeft: "auto",
  },
})

const JobCard = ({ id, title, salary, equity }) => {
  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h3">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Salary: {salary}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Equity: {equity}
        </Typography>
      </CardContent>
      <CardActions>
        <Button className={classes.button} variant="contained" color="primary">Apply</Button>
      </CardActions>
    </Card>
  )
}


export default JobCard;