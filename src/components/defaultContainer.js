import React from "react";
import SideBar  from "../components/sidebar";
import Footer from '../components/footer';
import NavBar from '../components/navbar';


const MainPanel = () => {
   
    return( 
        <>
            <NavBar></NavBar>
            <div className="container-fluid page-body-wrapper">
                <SideBar></SideBar>
                <div className="main-panel"> 
                    <div className="content-wrapper"> 
                    
                    </div>
                    <Footer></Footer>
                </div>
            </div>
        </>
    );
}

export default MainPanel;