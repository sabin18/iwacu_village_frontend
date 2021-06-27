import { gql } from '@apollo/client';

const ADD_DISCUSSION = gql`
  mutation createDiscussion($input: DiscussionInputType!) {
    createDiscussion(input: $input) {
      errors {
        field
        message
      }
      discussion{
        userName{
        deviceId  
        }   
      }
    }
  }
`;
const ADD_COMMENT = gql`
  mutation createDiscussionComment($input:  DiscussionCommentInputType!) {
    createDiscussionComment(input: $input) {
      errors {
        field
        message
      }
      discussionComment{
        userName{
        deviceId  
        }   
      }
    }
  }
`;

const APPROVE_DISCUSSION = gql`
  mutation approveDiscussion($input:ApproveDiscussionInputType) {
    approveDiscussion(input: $input) {
      errors {
        field
        message
      }
    }
  }
`;

const APPROVE_COMMENT = gql`
  mutation approveComment($input:ApproveDiscussionInputType) {
    approveComment(input: $input) {
      errors {
        field
        message
      }
    }
  }
`;
const LIKE_DISCUSSION = gql`
  mutation likeDiscussion($input:LikeInputType) {
    likeDiscussion(input: $input) {
      errors {
        field
        message
      }
      userName{
        deviceId  
        } 
    }
  }
`;
const LIKE_COMMENT = gql`
  mutation likeDiscussionComment($input:LikeInputType) {
    likeDiscussionComment(input: $input) {
      errors {
        field
        message
      }
      userName{
        deviceId  
        } 
    }
  }
`;

export { ADD_DISCUSSION, ADD_COMMENT, APPROVE_DISCUSSION, APPROVE_COMMENT, LIKE_DISCUSSION, LIKE_COMMENT}