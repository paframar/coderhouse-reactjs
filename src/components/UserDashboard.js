import React, {useState} from 'react';
import UserLogin from './UserLogin';
import UserOrders from './UserOrders';
import UserInfo from './UserInfo';

import { auth } from '../FirebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

const UserDashboard = () => {

    const [currentUser, setCurrentUser] = useState({});

    onAuthStateChanged(auth, (currentUserParam) => {
        setCurrentUser(currentUserParam);
    });


    return (

        <div className="flex-row">
            
            <div className ="m-20">
                    <UserLogin/>
                    {currentUser !== null ?<UserInfo/>:null}
            </div>

            {currentUser !== null ?
                <div className="flex-row jc-fs ai-c">
                    <UserOrders/>
                </div>
            :
                null
            }   



        </div>
        
    )
    
};

export default UserDashboard;
