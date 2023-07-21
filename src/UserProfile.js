
import './App.scss';
import React, { useState, useEffect } from 'react';

function UserProfile() {
    const [hours, setHours] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://mw23-yir-1229764750.us-east-1.elb.amazonaws.com/core-numbers-top-lists/202056173`);
            const data = await response.json();
            console.log(data)
            setHours(Math.round(data.hoursSpent))
          };

        fetchData();
    },[hours]);
    return (
        <>
            <div className="userprofile">
                <h4>USER PROFILE</h4>
                <p className="userprofile__description">You’ve spent a total of <b>{hours}</b> hours on  the site in 2023.</p>
            </div>
        </>
    );
 }

export default UserProfile;
