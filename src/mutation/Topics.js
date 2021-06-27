import { gql } from '@apollo/client';

const CREATE_TOPIC = gql`
  mutation createTopic($subject: String, $summary: String, $language:LanguageType) {
    createTopic(input: { subject: $subject, summary: $summary, language:$language }) {
      topic {
        subject
        summary
        language
        id
      }
    }
  }
`;

const UPDATE_TOPIC = gql`
  mutation updateTopic($id: ID, $subject: String, $summary: String, $language:LanguageType) {
    updateTopic(input: { subject: $subject, summary: $summary, id: $id,language:$language }) {
      errors {
        field
        message
      }
    }
  }
`;
const DELETE_TOPIC = gql`
mutation deleteTopic(
  $id: ID!
) {
  deleteTopic(id:$id)
  
  {
    success
  }
}
`;
export { CREATE_TOPIC, UPDATE_TOPIC, DELETE_TOPIC };