
import React from "react";


class NavBar extends React.Component{
    
     render(){ 
        // const placeHolderImage = "https://assets.newglue.com/assets/avatar_placeholder-c4a9963ad86c68649100b476add586667aaaf4672a3dbfd6abf0e7338f4f5337.jpg";
        return(
            <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                <div className="navbar-brand-wrapper">
                   <h3 className="text text-white text-center mt-4">KDH</h3>
                </div>
                <div className="navbar-menu-wrapper d-flex align-items-center flex-grow-1">
                    <h5 className="mb-0 font-weight-medium d-none d-lg-flex">Welcome Kalafi Digital Health Card</h5>
                    <ul className="navbar-nav navbar-nav-right ml-auto">
                    {/* <li className="nav-item dropdown d-none d-xl-inline-flex user-dropdown">
                        <a className="nav-link dropdown-toggle" id="UserDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
                        <img className="img-xs rounded-circle ml-2" src={placeHolderImage} alt="Profile  Large"/> <span className="font-weight-normal"> Henry Klein </span></a>
                        <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="UserDropdown">
                        <div className="dropdown-header text-center">
                            <img className="img-md rounded-circle" src={placeHolderImage} alt="Profile  Small"/>
                            <p className="mb-1 mt-3">Allen Moreno</p>
                            <p className="font-weight-light text-muted mb-0">allenmoreno@gmail.com</p>
                        </div>
                        <a className="dropdown-item"><i className="dropdown-item-icon icon-user text-primary"></i> My Profile <span className="badge badge-pill badge-danger">1</span></a>
                        <a className="dropdown-item"><i className="dropdown-item-icon icon-energy text-primary"></i> Activity</a>
                        <a className="dropdown-item"><i className="dropdown-item-icon icon-question text-primary"></i> FAQ</a>
                        <a className="dropdown-item"><i className="dropdown-item-icon icon-power text-primary"></i>Sign Out</a>
                        </div>
                    </li> */}
                    </ul>
                    <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                    <span className="icon-menu"></span>
                    </button>
                </div>
            </nav>
        );
    };
}


export default NavBar;