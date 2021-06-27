import { gql } from '@apollo/client';

const CREATE_QUIZ = gql`
  mutation createQuiz($input: QuizInputType!) {
    createQuiz(input: $input) {
      errors {
        field
        message
      }
    }
  }
`;

const UPDATE_QUIZ = gql`
  mutation updateQuiz($input: QuizInputType!) {
    updateQuiz(input: $input) {
      errors {
        field
        message
      }
    }
  }
`;

const DELETE_QUIZ= gql
`mutation deleteQuiz( $id:ID!) {
 deleteQuiz (id:$id)
  {
    success
  }
}
`;

export {CREATE_QUIZ,UPDATE_QUIZ,DELETE_QUIZ}