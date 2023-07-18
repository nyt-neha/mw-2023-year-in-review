
import '../App.css';
import React from 'react';
import {Outlet, Link} from "react-router-dom";

function Home() {
    return (
        <>
        <nav>
            <h1>Home</h1>
            <Link to= "/yournyt"> Begin </Link>
        </nav>
        <Outlet />
        </>
    );
 }

export default Home;
