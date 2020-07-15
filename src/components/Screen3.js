import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import MyCard from './Reusable/Card';
import Grid from '@material-ui/core/Grid';

const Screen3 = (props) => {

    let method;
    let acc;
    let user;
    if(props.location.state === undefined){
        method = 0;
        acc = {}
        user = '';
    }
    else{
        method = props.location.state.method;
        acc = props.location.state.acc
        user = props.location.state.acc.user;
    }

    // if(typeof props !== undefined){
    //     method = props.location.state.method;
    //     acc = props.location.state.acc;
    // }
    

    const getMethodName = (method) => {
        console.log(method)
        if(method === 1){
            return 'Debit Card';
        }
        else if(method === 2){
            return 'Credit Card';
        }
        else{
            return 'UPI';
        }
    }

    return(
        <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
        >
        {console.log(props)}
        {method === 0 ? <MyCard> 
            <Typography variant="h4">
                    Please Make a payment first
            </Typography>
            <br />
            <Divider />
            <br />
            <Link to='/'>
            <Button size="small" color="primary">Make Transaction</Button>
            </Link>
        </MyCard> : <MyCard>
            <Typography variant="h4">
                    Payment Successful
            </Typography>
            <br />
            <Divider />
            <br />
            <Typography variant="h6">
                    Username : {user}
            </Typography>
            <Typography variant="h6">
                    Method : {getMethodName(method)}
            </Typography>

            <Typography variant="h6">
                    Amount : ${acc.amount}
            </Typography>

            <CardActions>
            <Link to='/'>
            <Button size="small" color="primary">Repeat Transaction</Button>
            </Link>
            </CardActions>
        </MyCard>
        }
        
        </Grid>
    )
};

export default Screen3;