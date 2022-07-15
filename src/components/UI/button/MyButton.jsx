import React from 'react';
import classes from './style.module.css'

const MyButton = ({children, ...props}) => {
    return (
        <div>
            <button {...props} className={classes.button}>{children}</button>
        </div>
    );
};

export default MyButton;