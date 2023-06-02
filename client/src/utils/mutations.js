import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_PROJECT = gql`
  mutation addProject($title: String!, $company: String!, $description: String!, $startDate: String!, $endDate: String!)) {
    addProject(title: $title, company: $company, description: $description,startDate: $startDate, endDate: $endDate ) {
      _id
    company
    title
    description
    startDate
    endDate
    customer
    }
  }
`;

export const ADD_INVOICE = gql`
  mutation addInvoice($project: ID, $company: String!, $amount: Float!, $currency: String!, $dueDate: String!, $paid: Boolean!)) {
    addInvoice(project: $project, company: $company, amount: $amount, currency: $currency, dueDate: $dueDate, paid: $paid) {
      _id
    company
    amount
    currency
    dueDate
    paid
    stripePaymentIntentId
    employee
    }
  }
`;