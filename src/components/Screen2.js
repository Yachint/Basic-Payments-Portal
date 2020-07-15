import React, {useState} from 'react';
import history from '../history';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import MyCard from './Reusable/Card';
import Divider from '@material-ui/core/Divider';
import CardBased from './Payments/cardBased';
import UpiBased from './Payments/upiBased';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
}));

const errorState = {
    num: '',
    MM: '',
    YY: '',
    CVV: ''
}

const initialState = {
    num: '',
    MM: '',
    YY: '',
    CVV: ''
}
  
const Screen2 = (props) => {

    const [method, setMethod] = useState(1);
    const [details, setDetails] = useState(initialState);
    const [upiDetails, setUpiDetails] = useState('');
    const [errorDetails, setError] = useState(errorState);
    const classes = useStyles();

    const updateError = (key, value) => {
        const updatedError = {...errorDetails, [key]: value};
        setError(updatedError);
    }

    const updateDetails = (key, value) => {
        setError(errorState);

        if(key === 'num' && value.length !== 16){
            updateError(key, 'Enter 16 digit credit-card number');
        }
        if(key === 'MM' && value.length !== 2){
            updateError(key, 'Enter valid month');
        }
        if(key === 'YY' && value.length !== 2){
            updateError(key, 'Enter valid year');
        }
        if(key === 'CVV' && value.length !== 3){
            updateError(key, 'Enter 3 digit CVV');
        }
        
        const updatedObj = {...details, [key]: value};
        setDetails(updatedObj);
        //console.log(details);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(method);
        // console.log(details);
        // console.log(upiDetails);
        // console.log(props.location.state);

        const finalObj = {
            method: method,
            details: details,
            upi: upiDetails,
            acc: props.location.state
        };

        history.push({
            pathname: '/success',
            state: finalObj
        });
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
            <MyCard>
                <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <Typography variant="h5">
                            Enter Details :
                    </Typography>
                    <div>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={method}
                        onChange={e => setMethod(e.target.value)}
                        >
                            <MenuItem value={1}>Debit Card</MenuItem>
                            <MenuItem value={2}>Credit Card</MenuItem>
                            <MenuItem value={3}>UPI</MenuItem>
                            <MenuItem disabled value={4}>COD</MenuItem>
                        </Select>
                    </div>
                    <br />

                    <Divider />

                    <br />

                    {method === 3 ? 
                    <UpiBased details={upiDetails} updateDetails={setUpiDetails}/> :
                    <CardBased details={details} updateDetails={updateDetails} errors={errorDetails}/>
                    }  

                    <Button variant="contained" color="primary" type="submit"> Next </Button>
                </form>
            </MyCard>
        </Grid>
    )
};

export default Screen2;