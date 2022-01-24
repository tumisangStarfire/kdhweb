import React from "react";
import { Link } from 'react-router-dom';

const BreadCrumb = (props) =>{
    const { parentPageLink,parentPageTitle, currentPage   } = props;
    return (
        <div className="page-header">
              <h3 className="page-title">{currentPage}</h3>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><Link to={parentPageLink}>{parentPageTitle}</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">{currentPage}</li>
                </ol>
              </nav>
            </div>
    );
}

export default BreadCrumb;