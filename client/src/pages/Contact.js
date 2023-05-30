import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_CONTACT} from '../../utils/mutations';

import Auth from '../../utils/auth';

const ContactForm = () => {
    const [contactMessage, setContactMessag] = useState('');
    const [contactName, setContactName] = useState('');
    const [contactEmail, setContactEmail] = useState('');

   
}

