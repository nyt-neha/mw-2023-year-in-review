
import '../App.scss';
import React from 'react';
import {Outlet, Link} from "react-router-dom";

function YourNYT(props) {
    return (
        <>
            <div className="yournyt">
                <div className="stat">
                    <p className="stat__num">1,235</p>
                    <p className="stat__name">Articles {String.fromCharCode(8594)}</p>
                </div>
                <div className="stat">
                    <p className="stat__num">1,587,939</p>
                    <p className="stat__name">Words {String.fromCharCode(8594)}</p>
                </div>
                <div className="stat">
                    <p className="stat__num">11</p>
                    <p className="stat__name">Favorite {<br/>} Contributors {String.fromCharCode(8594)}</p>
                </div>
        </div>
        <Outlet />
        </>
    );
 }

export default YourNYT;