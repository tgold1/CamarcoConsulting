import React from 'react';
import { Link } from 'react-router-dom';

const UserList = ({
    Users,
    Company,
}) => {
    if (!Users.length) {
        return <h3>No Users</h3>
    }

    return (
        <div>
          {Users && User.map((User)=>(
            <div key={User._id} className="card md-3">
                
            </div>
          ))}  

        </div>
    )
}

export default UserList;