import React from "react";
import classes from './Buttons.module.scss';

const MainButton = ({children, ...props}) => {

    return (
        <button {...props} className={classes.mainButton}>
            {children}
        </button>
    );

};

export default MainButton;