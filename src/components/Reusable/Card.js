import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  root: {
    width: 400,
    position: 'relative',
    padding: '8px',
    border: '1px solid grey'
  }
});

const MyCard = (props) => {
    const classes = useStyles();

    return(
        <Card className={classes.root}>
            <CardContent>
                {props.children}
            </CardContent>
        </Card>
    )
}

export default MyCard;