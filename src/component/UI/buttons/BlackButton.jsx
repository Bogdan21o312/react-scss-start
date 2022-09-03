import React from "react";
import classes from './Buttons.module.scss';

const BlackButton = ({children, ...props}) => {

    return (
        <button {...props} className={classes.blackButton}>
            {children}
        </button>
    );

};

export default BlackButton;