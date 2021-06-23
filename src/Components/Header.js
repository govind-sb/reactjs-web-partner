import React from 'react';
import {
    Link
  } from "react-router-dom";


const Header = () => {
    return(
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-3 col-12 logo-col">
                        <a href="#" className="logo">
                            <i className="fab fa-pied-piper"></i>
                            <span>React Js Template</span>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-12 nav-col">
                        <nav>
                            <ul>
                                <li>
                                    <Link exact={true} activeClassName="selected" to="/">Partner</Link>
                                </li>
                                 <li>
                                    <Link activeClassName='is-active' to="/landlord">Landlord</Link>
                                 </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-5 col-md-5 col-12 mail-col">
                        <a href="mailto:befranchise@paislei.com" className="mail">
                            <i className="far fa-envelope"></i>
                            <span>reactjs@react.com</span></a>
                        <a href="tel:+91 9910008999" className="number">
                            <i className="fas fa-phone-alt"></i>
                            <span>+91 9910012345</span></a>
                    </div>
                </div>
            </div>
        </header>
    )

}


export default Header;

