import React from 'react';
import classes from "./MyInput.module.css"
const MyInput = ({props, name,}) => {
    return (
        <div className={classes.DivInp}>
            <p className={classes.NameDiv}>{name}</p>
            <input className={classes.Input} {...props}/>
            <p className={classes.BodyDiv}>{body}</p>
        </div>
    );
};

export default MyInput;