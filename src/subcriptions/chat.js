import { gql } from '@apollo/client';

const REAL_CHAT_MESSAGE = gql`
subscription onNewChatMessage($chatroom: String) {
    onNewChatMessage(chatroom: $chatroom) {
        chatroom
        createdAt
        receiver
        sender
        text
    }
  }
`;

const NEW_CHAT_MESSAGE = gql`
subscription onNewConversation($event: String) {
    onNewConversation(event: $event) {
        event
        message 
    }
  }
`;

export {REAL_CHAT_MESSAGE, NEW_CHAT_MESSAGE}