import { gql } from '@apollo/client';

const TOPICS_LIST = gql`
query topics($age: String, $gender: String ){
  topics(age: $age, gender:$gender) {
    id
    createdAt
    updatedAt
    deletedAt
    subject
    summary
  }
}
`;
const TOPIC = gql`
query topic($id:Int!) {
  topic(id:$id){subject,
    summary,id,language
  }
}`

export { TOPICS_LIST,TOPIC };