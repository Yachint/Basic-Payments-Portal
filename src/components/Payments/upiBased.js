import React from 'react';
import TextField from '@material-ui/core/TextField';

const UpiBased = (props) => {

    const { details, updateDetails } = props;

    return(
        <div>
            <div>
                <TextField 
                    required 
                    id="UpiNumber" 
                    label="Upi Number" 
                    value = {details.num}
                    onInput = {e => updateDetails(e.target.value)}
                />
            </div>
        </div>
    );

}

export default UpiBased;