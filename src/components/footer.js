

import React from "react";

const Footer = () => {
    const year  = new Date().getFullYear()
    return(
        <footer className="footer">
            <div className="d-sm-flex justify-content-center justify-content-sm-between">
                <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © { year} <a href="https:kalafidigittalhealth.co.bw"  rel="noreferrer" target="_blank">Kalafi</a>. All rights reserved.</span>
                <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Hand-crafted & made with <i className="bi bi-heart text-danger"></i></span>
            </div>
        </footer>
    );
}

export default Footer;