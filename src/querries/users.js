import { gql } from '@apollo/client';

const ALL_USERS_QUERY = gql`
  query users {
    users {
      id
      firstName
      lastName
      email
      phone
      organization
      }
    }
`;
const SINGLE_USER = gql`
query user($id:Int!) {
  user(id:$id)
  {
    id
    firstName
    lastName
    email
    username
    phone
    organization
    groups{
      id
      name
    }
}
}
`;
// const PERMISSION = gql`
// query permissions{
//  permissions{
// id
// name
// }
// }
// `;
export { ALL_USERS_QUERY, SINGLE_USER };
