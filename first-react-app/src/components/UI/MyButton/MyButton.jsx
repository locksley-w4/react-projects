import React from 'react';
import classes from './MyButton.module.css'

const MyButton = ({children, className, ...props}) => {
    return (
        <button className={className + " " + classes.myBtn} {...props}>
            {children}
        </button>
    );
}

export default MyButton;
