import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

const Profile = () => {
    const { loading, data, error } = useQuery(QUERY_ME); // Added error property

    if (loading) {
        return <h1>Loading...</h1>; // Improved loading 
    }

    if (error) {
        console.log(error);
        return <h1>Error fetching data</h1>;
    }


    const userData = data?.me || {};

    return (
        <div>
            <h2>{userData.username}</h2>
            <p>{userData.company}</p>

            <div>
                {/* Map for projects per user */}
                {userData.projects && userData.projects.map((Project) => (
                    <div key={Project._id}>
                        <p>{Project.title}</p>
                        <p>{Project.description}</p>
                        <p>{Project.startDate}</p>
                        <p>{Project.endDate}</p>
                    </div>
                ))}
                {userData.projects && userData.projects.length === 0 && (
                    <p>No projects found</p> // Added check for empty projects array
                )}
            </div>

            <div>
                {/* Map for invoices per project/user */}
                {userData.invoices && userData.invoices.map((invoice) => (
                    <div key={invoice._id}>
                        <p>{invoice.company}</p>
                        <p>{invoice.currency}</p>
                        <p>{invoice.dueDate}</p>
                        <p>{invoice.paid}</p>
                    </div>
                ))}
                {userData.invoices && userData.invoices.length === 0 && (
                    <p>No invoices found</p> // Added check for empty invoices array
                )}
            </div>
        </div>
    );
};

export default Profile;
