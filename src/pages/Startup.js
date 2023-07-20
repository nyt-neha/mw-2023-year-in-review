
import '../App.scss';
import React from 'react';
import {Outlet, Link} from "react-router-dom";

function Startup() {
    return (
        <div className="startup">
            <p className="home__year--large">20<br/>23</p>
            <Link className="button" to="/home"> Begin </Link>
        </div>
    );
 }

export default Startup;
