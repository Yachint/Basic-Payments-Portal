import React, { useState } from 'react';
import history from '../history';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import MyCard from './Reusable/Card';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
  

const Screen1 = () => {

    const [User, setUser] = useState('');
    const [Address, setAddress] = useState('');
    const [Amount, setAmount] = useState(0);

    const classes = useStyles();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(User);
        console.log(Address);
        history.push({
            pathname: '/details',
            state: {
                user: User,
                address: Address,
                amount: Amount
            }
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
                        <TextField 
                            id="username" 
                            label="Username" 
                            value = {User}
                            onInput = {e => setUser(e.target.value)}
                        />
                    </div>

                    <div>
                        <TextField 
                            label="Address" 
                            value={Address}
                            onInput={e => setAddress(e.target.value)} />
                    </div>

                    <div>
                        <TextField 
                            label="Amount" 
                            value={Amount}
                            type="number"
                            onInput={e => setAmount(e.target.value)} />
                    </div>
                    <Button variant="contained" color="primary" type="submit"> Next </Button>
                </form>
            </MyCard>
        </Grid>
    )
};

export default Screen1;


