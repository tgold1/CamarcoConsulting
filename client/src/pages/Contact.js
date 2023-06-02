import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
//import { ADD_CONTACT } from '../../utils/mutations.js';
import Auth from '../utils/auth';
import axios from 'axios';
import { validateEmail } from '../utils/helpers';


const Contact = () => {
    const [contactMessage, setContactMessage] = useState('');
    const [contactFirstName, setContactFirstName] = useState('');
    const [contactLastName, setContactLastName] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    // const [phoneNumber, setPhoneNumber] = useState ('');
    const [emailError, setEmailError] = useState('');

    // const [addContact, { error }] = useMutation(ADD_CONTACT);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            // const { data } = await addContact({
            //     variables: {
            //         contactMessage,
            //         contactEmail,
            //         contactName,
            //     },
            // });

            setContactEmail('');
            if (!validateEmail(contactEmail)) {
                setEmailError('Please enter a valid email');
            }
            // console.log(contactEmail)
            setContactFirstName('');
            // console.log(contactFirstName)
            setContactLastName('');
            // console.log(contactLastName)
            setContactMessage('')
            // console.log(contactMessage)

            axios
                .post("https://getform.io/f/7c090aea-f38b-4828-a922-5b7ece892e50", {
                    firstname: contactFirstName,
                    lastname: contactLastName,
                    email: contactEmail,
                    message: contactMessage,
                },
                    { headers: { 'Accept': 'application/json' } })
                .then(response => console.log(response))
                .catch(error => console.log(error))

        } catch (err) {
            console.error(err);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === 'contactMessage') {
            setContactMessage(value);
        }
        if (name === 'contactFirstName') {
            setContactFirstName(value);
        }

        if (name === 'contactLastName') {
            setContactLastName(value);
        }

        if (name === 'contactEmail') {
            setContactEmail(value);
        }
    };

    return (
        <div>
            <form
                className="container flex-row justify-center justify-space-between-md align-center"
                onSubmit={handleFormSubmit}
            >
                <div class="form-group">
                    <div className="col-12 col-lg-9">
                        <input
                            name="contactFirstName"
                            placeholder="First Name"
                            value={contactFirstName}
                            className="form-input w-100"
                            style={{ lineHeight: '1.5', resize: 'vertical' }}
                            onChange={handleChange}
                        ></input>
                        <input
                            name="contactLastName"
                            placeholder="Last Name"
                            value={contactLastName}
                            className="form-input w-100"
                            style={{ lineHeight: '1.5', resize: 'vertical' }}
                            onChange={handleChange}
                        ></input>

                        <input
                            name="contactEmail"
                            placeholder="Email"
                            value={contactEmail}
                            className="form-input w-100"
                            style={{ lineHeight: '1.5', resize: 'vertical' }}
                            onChange={handleChange}
                        />
                        {emailError && <p className="error-text">{emailError}</p>}

                        <textarea
                            name="contactMessage"
                            placeholder="Add your message..."
                            value={contactMessage}
                            className="form-input w-100"
                            style={{ lineHeight: '1.5', resize: 'vertical' }}
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    <div className="col-12 col-lg-3">
                        <button className="btn btn-primary btn-block py-3" type="submit">
                            Submit
                        </button>
                    </div>
                </div>
            </form>


        </div>
    )
}

export default Contact;