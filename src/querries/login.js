import { gql } from '@apollo/client';

const LOGIN_QUERY = gql`
  mutation tokenAuth($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      success
      user {
        id
        pk
        username
        firstName
        organization
        groups{
          name
      }
      }
      errors
      token
    }
  }
`;

export default LOGIN_QUERY;
