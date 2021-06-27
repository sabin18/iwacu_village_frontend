import { gql } from '@apollo/client';

const ADD_PERIOD = gql`
  mutation addPeriod($input: PeriodInputType!) {
    addPeriod(input: $input) {
      errors {
        field
        message
      }
    }
  }
`;

export {ADD_PERIOD}