
import '../App.scss';
import React from 'react';
import {Outlet, Link} from "react-router-dom";

function Home() {
    return (
        <>
            <div className="home">
                <p className="home__text">
                    Welcome, Grace R. to your
                </p>
                <p className="home__year">
                    2023
                </p>
                <p className="home__text">
                    year in review
                </p>
                <p className="home__text">
                    Your profile leans Purple
                </p>
                <Link to="/yournyt"> Begin </Link>
            </div>
            <Outlet />
        </>
    );
 }

export default Home;
