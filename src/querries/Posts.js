import { gql } from '@apollo/client';

const ALL_POSTS_QUERY = gql`
  query posts ($topicId: Int,$status:ApprovalDecisionType, $page: Int,
    $pageSize: Int){
    posts (topicId: $topicId, status:$status, page:$page,pageSize:$pageSize) {
      pages
      objects{
      createdAt
      updatedAt
      id
      audioMessage
      videoMessage
      featuredImage
      summary
      title
      topic {
        id
        createdAt
        updatedAt
        deletedAt
        subject
        starter {
          id
          lastLogin
          isSuperuser
          username
          firstName
        }
      }
    }
    }
  }
`;

const PUBLISHED_POSTS_QUERY = gql`
  query publishedPosts ($age: String, $gender: String ,$topicId: Int,$page: Int,$search: String
    $pageSize: Int){
    publishedPosts (age: $age, gender: $gender ,topicId: $topicId, page:$page,pageSize:$pageSize,search: $search) {
      pages
      objects{
      createdAt
      updatedAt
      id
      audioMessage
      videoMessage
      featuredImage
      summary
      title
      topic {
        id
        createdAt
        updatedAt
        deletedAt
        subject
        starter {
          id
          lastLogin
          isSuperuser
          username
          firstName
        }
      }
    }
    }
  }
`;

const POSTS_FOR_APPROVAL_QUERY = gql`
query postsForApproval($page: Int,
  $pageSize: Int){
   postsForApproval (page:$page,pageSize:$pageSize){
    pages
    objects{
    createdAt
    updatedAt
    id
    audioMessage
    videoMessage
    featuredImage
    summary
    title
    topic {
      id
      createdAt
      updatedAt
      deletedAt
      subject
      starter {
        id
        lastLogin
        isSuperuser
        username
        firstName
      }
    }
  }
    }
  }
`;

const SINGLE_POST = gql`
query post($id:Int!) {
  post(id:$id)
  {
    id,
    createdAt
    message
    title
    summary
    audioMessage
    language
    videoMessage
    featuredImage
    genderGroups
    ageGroups
    firstApproverComment
    secondApproverComment
    firstApprovalStatus
    secondApprovalStatus
    status
    topic{
      id
      subject
    },
    groups
    
    {
    id
    name}
    }
}
`;
export { ALL_POSTS_QUERY, SINGLE_POST, POSTS_FOR_APPROVAL_QUERY, PUBLISHED_POSTS_QUERY };
