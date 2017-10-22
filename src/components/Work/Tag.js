import React from 'react';
import * as Colors from '../Colors';

const enabled = {
    display: "inline-block",
    marginRight: "8px",
    marginBottom: "8px",
    padding: "5px 12px",
    color: Colors.text.icon,

    backgroundColor: Colors.primary.accent,
    fontSize: "0.9em",
};

const disabled = {
    display: "inline-block",
    marginRight: "8px",
    marginBottom: "8px",
    padding: "5px 12px",
    color: Colors.text.icon,
    fontSize: "0.9em",
    backgroundColor: Colors.text.divider
};


const Tag = ({ clicked, text, handler }) => {
    return <div onClick={()=>handler(text)} style={ clicked ? enabled : disabled}> {text} </div>;

};

export default Tag;
