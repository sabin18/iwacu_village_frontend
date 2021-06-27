import { gql } from '@apollo/client';

const CREATE_POST = gql`
  mutation createPost($input: PostInputType!) {
    createPost(input: $input) {
      post {
        title
        message
        audioMessage
      }
      errors {
        field
        message
      }
    }
  }
`;
const UPDATE_POST = gql`
mutation updatePost($input: PostInputType!){ 
  updatePost(input: $input){
    errors{
     field
     message
    } 
  }
  }
`;
const DELETE_POST = gql`mutation deletePost(
  $id:ID!
) {
  deletePost (id:$id)
  {
    success
  }
}
`;

const APPROVE_POST = gql`
mutation approvePost($input: PostApprovalType!){ 
  approvePost(input: $input){
    errors{
     field
     message
    } 
  }
  }
`;
export { CREATE_POST, UPDATE_POST,DELETE_POST, APPROVE_POST };