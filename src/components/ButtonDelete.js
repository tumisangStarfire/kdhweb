
import React, { useState } from "react";

const DeleteButton = (props) =>{
    const [ isLoading, setiSLoading ] = useState(false);
    
    
    return (
        <button type="button" className="btn btn-sm btn-danger float-right" onClick={ (e) => console.log(e) }><i className="bi bi-trash"></i></button> 
    );

}

export default DeleteButton;