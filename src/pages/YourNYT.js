
import '../App.scss';
import React, { useState, useEffect } from 'react';
import {Outlet, Link} from "react-router-dom";

function numWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function YourNYT(props) {
    const [articleNum, setArticleNum] = useState(0);
    const [wordNum, setWordNum] = useState(0);
    const [contNum, setContNum] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://mw23-yir-1229764750.us-east-1.elb.amazonaws.com/core-numbers-top-lists/202056173`);
            const data = await response.json();
            console.log(data)
            setArticleNum(data.articlesRead)
            setWordNum(data.wordsRead)
            setContNum(data.topBylines.slice(0,11).length)
          };

        fetchData();
    },[articleNum, wordNum, contNum]);
  
    return (
        <>
            <div className="yournyt">
                <div className="stat">
                    <p className="stat__num">{numWithCommas(articleNum)}</p>
                    <Link className="link" to="/toplists">
                        <p className="stat__name">Articles {String.fromCharCode(8594)}</p>
                    </Link>
                </div>
                <div className="stat">
                <p className="stat__num">{numWithCommas(wordNum)}</p>
                    <p className="stat__name">Words {String.fromCharCode(8594)}</p>
                </div>
                <div className="stat">
                <p className="stat__num">{numWithCommas(contNum)}</p>
                    <p className="stat__name">Favorite {<br/>} Contributors {String.fromCharCode(8594)}</p>
                </div>
                <div className="button">Share</div>
            </div>
        <Outlet />
        </>
    );
 }

export default YourNYT;