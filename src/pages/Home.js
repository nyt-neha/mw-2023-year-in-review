
import '../App.scss';
import React from 'react';
import {Outlet, Link} from "react-router-dom";

function Home() {
    return (
        <>
            <div className="home">
                <p className="home__name">
                    Welcome
                </p>
                <p className="home__name">
                Grace R. 
                </p>
                <p className="home__name">
                to your
                </p>
                <p className="home__year">
                    2023
                </p>
                <p className="home__name">
                    year in review
                </p>
                <br></br>
                <p className="home__name">
                    Your profile leans Purple
                </p>
                <Link className="button" to="/yournyt"> Begin </Link>
                </div>
               
            <Outlet />
        </>
    );
 }

export default Home;
