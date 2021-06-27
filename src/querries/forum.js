import { gql } from '@apollo/client';

const ALL_DISCUSSION = gql`
  query discussions (
    $pageSize: Int, $userName:String, $deviceId: String){
    discussions (pageSize: $pageSize,userName:$userName, deviceId: $deviceId){
      objects{
            createdAt
            id
            commentsCount
            message
            isActive
            userHasLiked
            likesCount
            topic{
                id
                subject
            }
            userName{
                deviceId
                username
            }
        }
  }
}
`;

const SINGLE_DISCUSSION = gql`
  query discussion ($id: Int!,$userName:String,$deviceId: String){
    discussion (id: $id,userName:$userName,deviceId: $deviceId) {
            createdAt
            id
            commentsCount
            message
            isActive
            userHasLiked
            likesCount
            topic{
                id
                subject
            }
            userName{
              deviceId
              username
          }
  }
}
`;

const ALL_COMMENTS = gql`
  query discussionComments ($discussionId: Int
    $pageSize: Int,$userName:String,$deviceId:String){
    discussionComments (discussionId: $discussionId
        pageSize: $pageSize, userName:$userName,deviceId:$deviceId) {
        objects{
            createdAt
            id
            message
            isActive
            userHasLiked
            likesCount
            discussion{
              topic{
                id
                subject
              }
            }
            userName{
              deviceId
              username
          }
        }
  }
}
`;

export {ALL_DISCUSSION, SINGLE_DISCUSSION, ALL_COMMENTS}
