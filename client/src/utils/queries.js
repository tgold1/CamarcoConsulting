import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    query user($username: String!) {
        user(username: $username) {
            _id
            username
            email 
            password
        }
    }

`;

export const QUERY_PROJECTS = gql`
    query getProjects {
        projects {
            _id
            title
            description
            startDate
            endDate
            customer {
                _id
                username
                email 
                password 
            }
        }  
    }
`;

export const QUERY_INVOICES = gql`
    query getInvoices($userId: ID!) {
        invoice(invoiceId: $invoiceId) {
            _id
            amount
            currency
            dueDate
            paid
            stripePaymentIntentId
            employee {
                _id
                username
                email 
                password 
            }
        }
    }
`;