import React from 'react';
import cl from "./MyIcon.module.css";

const MyIcon = ({url, alt}) => {
    return (
        <span className={cl.myIcon} >
            <img src={url} alt={alt ?? ""}/>
        </span>
    );
}


export default MyIcon;
