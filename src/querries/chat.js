import { gql } from '@apollo/client';

const ALL_MESSAGE_QUERY = gql`
  query allMessagesList{
    allMessagesList {
        createdAt
        id 
        isRead
        message
        receiver
        deviceId
        sender   
  }
}
`;

const MY_MESSAGES_QUERY = gql`
  query myMessages ($userName: String,
    $deviceId: String){
    myMessages (userName: $userName,deviceId:$deviceId) {
        createdAt
        id 
        isRead
        message
        receiver
        sender   
  }
}
`;

const CONVERSATION_QUERY = gql`
  query conversation ($senderUserName: String){
    conversation (senderUserName: $senderUserName) {
        createdAt
        id 
        isRead
        message
        receiver
        sender    
  }
}
`;



export {ALL_MESSAGE_QUERY, MY_MESSAGES_QUERY, CONVERSATION_QUERY}
