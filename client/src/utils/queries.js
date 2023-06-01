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
            title: String
            description: String
            startDate: Date
            endDate: Date
            customer: [User]!
        }
    }
`;

export const QUERY_INVOICES = gql`
    query getInvoices($userId: ID!) {
        invoice(invoiceId: $invoiceId) {
            _id
            amount: Number
            currency: String
            dueDate: Date
            paid: Boolean
            stripePaymentIntentId: String
            employee: [User]!
        }
    }
`;