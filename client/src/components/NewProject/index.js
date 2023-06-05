import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_PROJECT } from '../../utils/mutations';
import { QUERY_PROJECTS, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';

const ProjectForm = () => {
    const [description, setDescription] = useState('')
    const [title, setTitle] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [company, setCompany] = useState('')

    const [newProject, { error }] = useMutation(ADD_PROJECT, {
        update(cache, { data: { newProject } }) {
            try {
                const { projects } = cache.readQuery({ QUERY_PROJECTS });
                cache.writeQuery({
                    query: QUERY_PROJECTS,
                    data: { projects: [newProject, ...projects] }
                })
            } catch (e) {
                console.log(e);
            }
            const { me } = cache.readQuery({ query: QUERY_ME })
            cache.writeQuery({
                query: QUERY_ME,
                data: { me: { ...me, projects: [...me.projects, newProject] } }
            })
        }
    })

    const handleFormSubmit = async (event) => {
        event.preventDefault()
        try {
            const { data } = await newProject({
                variables: {
                    customer: Auth.getProfile().data.customer,
                    company,
                    title,
                    description,
                    startDate,
                    endDate,
                }
            })
            setDescription('')
            setTitle('')
            setStartDate('')
            setEndDate('')
            setCompany('')
        } catch (err) {
            console.log(err);
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === 'description') {
            setDescription(value);
        }
        if (name === 'company') {
            setCompany(value);
        }
        if (name === 'title') {
            setTitle(value);
        }
        if (name === 'startDate') {
            setStartDate(value);
        }
        if (name === 'endDate') {
            setEndDate(value);
        }
    }

    return (
        <div>
            <h3>What's your next project?</h3>

            {Auth.loggedIn() ? (
                <>
                    <form
                        className="flex-row justify-center justify-space-between-md align-center"
                        onSubmit={handleFormSubmit}
                    >
                        <div className="col-12 col-lg-12">
                            <textarea
                                name="description"
                                placeholder="Describe your Project here"
                                value={description}
                                className="form-input w-100"
                                style={{ lineHeight: '1.5', resize: 'vertical' }}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <div className="col-12 col-lg-3">
                            <textarea
                                name="title"
                                placeholder="Title here"
                                value={title}
                                className="form-input w-100"
                                style={{ lineHeight: '1.5', resize: 'vertical' }}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <div className="col-12 col-lg-3">
                            <textarea
                                name="startDate"
                                placeholder="when do you want this project to begin?"
                                value={startDate}
                                className="form-input w-100"
                                style={{ lineHeight: '1.5', resize: 'vertical' }}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <div className="col-12 col-lg-3">
                            <textarea
                                name="endDate"
                                placeholder="When would you like your project finished by?"
                                value={endDate}
                                className="form-input w-100"
                                style={{ lineHeight: '1.5', resize: 'vertical' }}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <div className="col-12 col-lg-3">
                            <textarea
                                name="company"
                                placeholder="What company do you belong to?"
                                value={company}
                                className="form-input w-100"
                                style={{ lineHeight: '1.5', resize: 'vertical' }}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <div className="col-12 col-lg-12">
                            <button className="btn btn-primary btn-block py-3" type="submit">
                                Add project
                            </button>
                        </div>
                        {error && (
                            <div className="col-12 my-3 bg-danger text-white p-3">
                                {error.message}
                            </div>
                        )}
                    </form>
                </>
            ) : (
                <p>
                    You need to be logged in to submit a new Project. Please{' '}
                    <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
                </p>
            )}
        </div>
    );
};

}

export default ProjectForm;