
import '../App.scss';
import React, { useState, useEffect } from 'react';
import {Outlet, Link} from "react-router-dom";

function TopLists() {
    const [mostReadList, setMostReadList] = useState([]);
    const [faveConts, setFaveConts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://mw23-yir-1229764750.us-east-1.elb.amazonaws.com/core-numbers-top-lists/202056173`);
            const data = await response.json();
            console.log(data)
            setMostReadList(data.topDesks.split(","))
            setFaveConts(data.topBylines.split(",").slice(0,3))
          };

        fetchData();
        // setContNum(11)
    },[mostReadList]);

    // useEffect(() => {
    //     setMostReadList(["Metro", "Science", "International", "Business", "Washington"])
    //     setFaveConts(["David Leonhardt", "Chelsia Rose Marcius", "Katie Robertson"])
    // });
    return (
        <div className="toplists">
            <hr/>
            <h4>YOUR MOST READ SECTIONS</h4>
            <ul className="toplists__mostread">
                {
                    mostReadList.map((name, idx) =>
                        <>
                            <li>{"#"+(idx+1)+"   "+name}</li>
                        </>
                    )
                }
            </ul>
            <hr/>
            <h4>YOUR FAVORITE CONTRIBUTORS</h4>
            <ul className="toplists__faveconts">
                {
                    faveConts.map((name, idx) =>
                        <>
                            <li>{"#"+(idx+1)+"   "+name}</li>
                        </>
                    )
                }
            </ul>
        <div className="button">Share</div>
        </div>
    );
 }

export default TopLists;
