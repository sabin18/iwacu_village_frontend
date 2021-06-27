import { gql } from '@apollo/client';

const SEND_CHAT_MESSAGE = gql`
  mutation sendMessage($input: MessageInputType) {
    sendMessage(input: $input) {
      chatroom
      errors {
        field
        message
      }
    }
  }
`;

export {SEND_CHAT_MESSAGE}