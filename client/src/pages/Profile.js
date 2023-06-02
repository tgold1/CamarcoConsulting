import React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_ME, QUERY_PROJECTS, QUERY_INVOICES } from '../utils/queries';

const Profile = () => {
    const [loading, data] = useQuery(QUERY_ME, QUERY_PROJECTS, QUERY_INVOICES)

    const userData = data?.me || {}


    if (loading) {
        return <h1>*LOADING*</h1>
    }

    return (
        <div>
            {/* Map through the user */}
            {userData.map((user, index) => (
                <div key={index}>
                    <h2>{user.username}</h2>
                    <p>{user.company}</p>

                    {/* maps for projects per user */}
                    {user.projects.map(project => {
                        return (
                            <div>
                                <p>{project.title}</p>
                                <p>{project.description} </p>
                                <p>{project.startDate}</p>
                                <p>{project.endDate}</p>
                            </div>
                        )
                    })}
                    {/* maps for invoices per project/user */}
                    {user.invoices.map(invoice => {
                        return (
                            <div>
                                <p>{invoice.company}</p>
                                <p>{invoice.currency}</p>                       
                                <p>{invoice.dueDate}</p>
                                <p>{invoice.paid}</p>
                            </div>
                        )
                    })}
                </div>

            ))}
        </div>
    )
}