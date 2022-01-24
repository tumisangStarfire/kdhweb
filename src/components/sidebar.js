
import React from "react";
import { Link } from 'react-router-dom';

const SideBar = () => {

    const placeHolderImage = "https://assets.newglue.com/assets/avatar_placeholder-c4a9963ad86c68649100b476add586667aaaf4672a3dbfd6abf0e7338f4f5337.jpg";
    return(
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
            <li className="nav-item nav-profile">
          
            <Link to="/my-health" className="nav-link">
                <div className="profile-image">
                <img className="img-xs rounded-circle" src={placeHolderImage} alt="profile " />
                <div className="dot-indicator bg-success"></div>
                </div>
                <div className="text-wrapper">
                <p className="profile-name">Tumisang Mogotsi</p>
                <p className="designation">Gaborone,Botswana</p>
                </div>
                <div className="icon-container">
                <i className="icon-bubbles"></i>
                <div className="dot-indicator bg-danger"></div>
                </div>
            </Link>
            </li>
            <li className="nav-item nav-category"><span className="nav-link">My Health</span></li>
            <li className="nav-item">
                <Link className="nav-link" to="/my-medication">
                    <span className="menu-title">Medication</span>
                    <i className="icon-globe menu-icon"></i>
                </Link>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="pages/forms/basic_elements.html">
                    <span className="menu-title">Illness</span>
                    <i className="icon-book-open menu-icon"></i>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="pages/charts/chartist.html">
                    <span className="menu-title">Injuries</span>
                    <i className="icon-chart menu-icon"></i>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="pages/tables/basic-table.html">
                    <span className="menu-title">Vaccine</span>
                    <i className="icon-grid menu-icon"></i>
                </a>
            </li>
            <li className="nav-item nav-category">
                <span className="nav-link">Share My Health
                </span>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/pages">
                    <span className="menu-title">Medical Expenses</span>
                    <i className="icon-doc menu-icon"></i>
                </a>
            </li>
          
        </ul>
        </nav>
    );
}

export default SideBar;