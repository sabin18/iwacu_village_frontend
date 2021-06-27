import { gql } from '@apollo/client';

const LOCATIONS_QUERY = gql`
  query locations($topicId: ID!){
    locations(topicId:$topicId){
     id
     latitude
     description
     longitude
     name
     topics {
       subject  
     }   
  }
}
`;
const SINGLE_LOCATIONS_QUERY = gql`
  query location($id: ID!){
    location(id:$id){
     id
     latitude
     description
     longitude
     name
     topics {
       id
       subject  
     }   
  }
}
`;



export {LOCATIONS_QUERY,SINGLE_LOCATIONS_QUERY}
