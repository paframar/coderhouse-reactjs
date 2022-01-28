import React, {useState, useEffect } from 'react';
import UserLogin from './UserLogin';
import UserOrders from './UserOrders';

import { auth } from '../FirebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

const UserDashboard = () => {

    const [currentUser, setCurrentUser] = useState({});

    onAuthStateChanged(auth, (currentUserParam) => {
        setCurrentUser(currentUserParam);
    });


    return (
        <div className ="flex-col jc-sa ai-c">
            <UserLogin/>

            {currentUser !== null ?
                <UserOrders/>
            :
                null
            }

        </div>
    )
    
};

export default UserDashboard;
