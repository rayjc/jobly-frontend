import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BusinessIcon from '@material-ui/icons/Business';


const useStyles = makeStyles({
  media: {
    maxHeight: 300,
  },
})

const CompanyCard = ({ handle, name, description, logo_url: logoUrl }) => {
  const classes = useStyles();

  return (
    <Card>
      <CardActionArea>
        {logoUrl && <CardMedia className={classes.media} image={logoUrl} title={name} /> || <BusinessIcon />}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}


export default CompanyCard;