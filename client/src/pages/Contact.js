import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_CONTACT } from '../../utils/mutations';

import Auth from '../../utils/auth';

const ContactForm = () => {
    const [contactMessage, setContactMessage] = useState('');
    const [contactName, setContactName] = useState('');
    const [contactEmail, setContactEmail] = useState('');

    const [addContact, { error }] = useMutation(ADD_CONTACT);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addContact({
                variables: {
                    contactMessage,
                    contactEmail,
                    contactName,
                },
            });
            setContactMessage('')
        } catch (err) {
            console.error(err);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === contactMessage) {
            setContactMessage(value);
        }
    };

    return (
        <div>
            <form
                className="flex-row justify-center justify-space-between-md align-center"
                onSubmit={handleFormSubmit}
            >
                <div className="col-12 col-lg-9">
                    <textarea
                        name="contactMessage"
                        placeholder="Add your message..."
                        value={commentText}
                        className="form-input w-100"
                        style={{ lineHeight: '1.5', resize: 'vertical' }}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <div className="col-12 col-lg-3">
                    <button className="btn btn-primary btn-block py-3" type="submit">
                        Add Message
                    </button>
                </div>
            </form>
        

        </div>
    )
}

