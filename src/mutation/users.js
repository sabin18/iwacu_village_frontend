import { gql } from '@apollo/client';
const SIGN_UP_QUERY = gql`
  mutation createUser(
    $firstName: String
    $lastName: String
    $phone: String
    $password: String!
    $username: String!
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      phone: $phone
      password: $password
      username: $username
    ) {
      user {
        id
      }
      errors {
        field
        message
      }
      success
    }
  }
`;

const ADD_USER_QUERY = gql`
  mutation createUser(
    $email: String!
    $firstName: String!
    $lastName: String!
    $phone: String!
    $roles: [String]
    $organization: String!
    $password: String!
    $username: String!
  ) {
    createUser(
      email: $email
      firstName: $firstName
      lastName: $lastName
      phone: $phone
      roles: $roles
      organization: $organization
      password: $password
      username: $username
      
    ) {
      user {
        id
      }
      errors {
        field
        message
      }
      success
    }
  }
`;
const UPDATE_USER = gql`
mutation updateUser(
  $id:ID!
  $email: String
  $firstName: String
  $lastName:String
  $phone: String
  $roles: [String]
  $organization: String
  $password: String
  $username: String!
) {
  updateUser(
    id:$id
    email: $email
    firstName: $firstName
    lastName: $lastName
    phone: $phone
    roles: $roles
    organization: $organization
    password: $password
    username: $username
  ) {
    user {
      id
    }
    errors {
      field
      message
    }
    success
  }
}
`;
const DELETE_USER = gql`
mutation deleteUser(
  $id:ID!
) {
   deleteUser(
    id:$id
  ) 
  { 
    success 
  }  
} 
`;

export {ADD_USER_QUERY, SIGN_UP_QUERY, DELETE_USER, UPDATE_USER};
