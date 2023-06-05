import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_PROJECT } from '../../utils/mutations';
import { QUERY_PROJECTS, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';

const ProjectForm = () => {
    const [description, setDescription]= useState('')
    const [title, setDescriptionTitle]= useState('')
    const [startDate, setStartDate]= useState('')
    const [endDate, setEndDate]= setState('')

    const [newProject, {error}]= useMutation (ADD_PROJECT,{
        update(cache, {data:{newProject}}) {
            try{
                const {projects}= cache.readQuery({QUERY_PROJECTS});
                cache.writeQuery({
                    query: QUERY_PROJECTS,
                    data: {projects: [newProject, ...projects]}
                })
            } catch(e){
            console.log(e);
            }
            const{me}=cache.readQuery({query: QUERY_ME})
            cache.writeQuery({
                query: QUERY_ME,
                data: {me:{...me, projects:[...me.projects, newProject]}}
            })
        }
    })

    const handleFormSubmit = async (event) =>{
        event.preventDefault()
        try {
            coonst {data} = await
        }
    })


}