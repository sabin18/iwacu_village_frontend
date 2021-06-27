import { gql } from '@apollo/client';

const ADD_LOCATION = gql`
  mutation createLocation ($input: LocationInputType!) {
    createLocation (input: $input) {
      errors {
        field
        message
      }
    }
  }
`;

const UPDATE_LOCATION = gql`
  mutation  updateLocation ($input: LocationInputType!) {
     updateLocation (input: $input) {
      errors {
        field
        message
      }
    }
  }
`;

const DELETE_LOCATION= gql
`mutation deleteLocation( $id:ID!) {
 deleteLocation (id:$id)
  {
    success
  }
}
`;

export {ADD_LOCATION,UPDATE_LOCATION,DELETE_LOCATION}