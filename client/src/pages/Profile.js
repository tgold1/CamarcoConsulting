import React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_ME, QUERY_PROJECTS, QUERY_INVOICES } from '../utils/queries';

const Profile = () => {
    const {loading, data} = useQuery(QUERY_ME)
    // const [loading, data] = useQuery(QUERY_ME, QUERY_PROJECTS, QUERY_INVOICES)
    // const [loading, data] = useQuery( QUERY_INVOICES)

    const userData = data?.me || {}


    if (loading) {
        return <h1>*LOADING*</h1>
    }
    if (userData) {
        console.log(userData)
    }

    return (
        <div>
            {/* Map through the user */}
            {/* {userData.map((user, index) => ( */}
                <div>
                    <h2>{userData.username}</h2>
                    <p>{userData.company}</p>

                    {/* maps for projects per user */}
                    {/* {userData.projects.map(project => {
                        return (
                            <div>
                                <p>{project.title}</p>
                                <p>{project.description} </p>
                                <p>{project.startDate}</p>
                                <p>{project.endDate}</p>
                            </div>
                        )
                    })} */}
                    {/* maps for invoices per project/user */}
                    {/* {userData.invoices.map(invoice => {
                        return (
                            <div>
                                <p>{invoice.company}</p>
                                <p>{invoice.currency}</p>                       
                                <p>{invoice.dueDate}</p>
                                <p>{invoice.paid}</p>
                            </div>
                        )
                    })} */}
                </div>

            
            {/* )} */}
        </div>
    )
}

export default Profile;