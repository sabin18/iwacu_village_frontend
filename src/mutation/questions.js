import { gql } from '@apollo/client';

const CREATE_QUESTION = gql`
  mutation createQuestion($input: QuestionInputType!) {
    createQuestion(input: $input) {
      errors {
        field
        message
      }
    }
  }
`;


const ANSWER_QUESTION = gql`
  mutation createAnswer($input: QuizAnswersInputType!) {
    createAnswer(input: $input) {
      result{
        earnedMarks
        totalMarks 
      }
      errors {
        field
        message
      }
    }
  }
`;

const DELETE_QUESTION = gql
`mutation deleteQuestion( $id:ID!) {
 deleteQuestion (id:$id)
  {
    success
  }
}
`;

const UPDATE_QUESTION = gql`
  mutation updateQuestion($input: QuestionInputType!) {
    updateQuestion(input: $input) {
      errors {
        field
        message
      }
    }
  }
`;


export {CREATE_QUESTION, ANSWER_QUESTION, DELETE_QUESTION,UPDATE_QUESTION}