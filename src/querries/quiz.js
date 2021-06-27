import { gql } from '@apollo/client';

const QUIZES_QUERY = gql`
  query quizzes($topicId: ID){
    quizzes (topicId: $topicId) {
        id
        level
        name
        status
        topic{
            id
            subject
        }
  }
}
`;
const SINGLE_QUIZES_QUERY = gql`
  query quiz($id: ID!){
    quiz(id: $id) {
        id
        level
        name
        status
        ageGroups
        genderGroups
        language
        topic{
            id
            subject
        }
        questionSet{
          id
        description
        choiceSet{
          id
        choice
        }
        marks
        type
        }
  }
}
`;

const QUIZES_RESULT_QUERY = gql`
  query results($quizId: ID
    $userId: ID){
    results(quizId: $quizId, userId:$userId) {
      createdAt
      id
      marks
      quiz{
        id
        name
      }
      status
      totalMarks
      updatedAt
      user{
        id
        lastName
        firstName
      }
  }
}
`;
export {QUIZES_QUERY, SINGLE_QUIZES_QUERY, QUIZES_RESULT_QUERY}
