import React, { useState } from 'react';
import { Button, Card, CardActions, CardContent, Typography, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  button: {
    marginLeft: "auto",
  },
})

const JobCard = ({ id, title, salary, equity, company_handle, handleApply, hasApplied = false }) => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    await handleApply(id, title, company_handle);
    setIsLoading(false);
  }

  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h3">
          {title}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          {company_handle}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Salary: {salary}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Equity: {equity}
        </Typography>
      </CardContent>
      <CardActions>
        <Button className={classes.button} variant="contained" color="primary"
          disabled={hasApplied || isLoading} onClick={handleClick}>
          Apply
          {isLoading && <CircularProgress color="inherit" size={10} thickness={10} />}
        </Button>
      </CardActions>
    </Card>
  )
}


export default JobCard;