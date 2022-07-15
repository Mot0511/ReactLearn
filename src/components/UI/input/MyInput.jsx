import React from 'react';
import classes from './style.module.css'

const MyInput = ({...props}) => {
    return (
        <div>
            <input className={classes.input} type="text" {...props}/><br />
        </div>
    );
};

export default MyInput;