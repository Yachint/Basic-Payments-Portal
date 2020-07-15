import React from 'react';
import TextField from '@material-ui/core/TextField';

const CardBased = (props) => {

    const { details, updateDetails, errors } = props;

    return(
        <div>
        <div>
            <TextField 
                error = {errors.num === '' ? false : true}
                helperText= {errors.num}
                required 
                id="CardNumber" 
                label="Card Number" 
                value = {details.num}
                onInput = {e => updateDetails('num',e.target.value)}
            />
        </div>
        <div>
            <TextField
                error = {errors.MM === '' ? false : true} 
                helperText={errors.MM}
                required 
                id="MM" 
                label="MM" 
                size="small"
                value = {details.MM}
                onInput = {e => updateDetails('MM', e.target.value)}
            />
            <TextField
                error = {errors.YY === '' ? false : true} 
                helperText={errors.YY}
                required 
                id="YY" 
                label="YY" 
                size="small"
                value = {details.YY}
                onInput = {e => updateDetails('YY', e.target.value)}
            />
        </div>
        <div>
        <TextField 
                error = {errors.CVV === '' ? false : true}
                helperText = {errors.CVV}
                required 
                id="CVV" 
                label="CVV" 
                size="small"
                value = {details.CVV}
                onInput = {e => updateDetails('CVV', e.target.value)}
        />
        </div>
        </div>
    );

}

export default CardBased;