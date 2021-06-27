import { gql } from '@apollo/client';

const QUESTION_QUERY = gql`
  query questions($quizId: ID){
    questions (quizId: $quizId) {
        id
        description
        choiceSet{
        choice
        }
        marks
        quiz{
            id
            name
        }
        type
  }
}
`;

const SINGLE_QUESTION_QUERY = gql`
  query question($id: ID!){
    question (id: $id) {
        id
        description
        choiceSet{
        choice
        isAnswer
        }
        marks
        quiz{
            id
            name
        }
        type
  }
}
`;


export {QUESTION_QUERY,SINGLE_QUESTION_QUERY}
