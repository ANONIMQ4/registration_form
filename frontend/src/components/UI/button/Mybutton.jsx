import React from 'react';
import classes from './MyButtnon.module.css'

const Mybutton = ({children, ...props}) => {
    return (
        <button {...props} type="submit" className={classes.Btn}>
            {children}
        </button>
    );
};

export default Mybutton;