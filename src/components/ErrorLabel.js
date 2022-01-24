
import React from "react"

const ErrorLabel = (props) => { 

    const { message } = props; 
    return (
        <p className="text text-danger"> { message} </p>
    );
} 

export default ErrorLabel;