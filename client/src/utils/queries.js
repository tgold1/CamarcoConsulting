import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query Users($username: String!) {
    Users(username: $username) {
      _id
      username
      email
      password
      company
    }
  }
`;

export const QUERY_PROJECTS = gql`
  query Projects {
    Projects {
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
  query Invoices{
    Invoices{
      _id
      company
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


export const QUERY_ME = gql`
 query me {
    me {
      _id
      username
      email
      password
      company
      userRole
      projects {
        title
        description
        startDate
        endDate
      }
      invoices {
        company
        amount
        currency
        dueDate
        paid
      }
    }
  }
`;
