
import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Message {
    _id: ID!
    sender_id: String!
    senderName: String!
    text: String!
    date: Timestamp!
  }
  input MessageSendInput {
    sender_id: NEString!
    senderName: NEString!
    text: NEString!
  }
  type MessagesMutation {
    send(input: MessageSendInput!): Message!
  }
  type Mutation {
    messages: MessagesMutation!
  }
  type Query {
    messages(offset: Int! = 0, limit: Int! = 20): [Message!]!
  }
  type Subscription {
    message: Message!
  }
`;

const Query = {
  messages() {
    return [
      {
        _id: '123',
        sender_id: '12345',
        senderName: 'Artem',
        text: 'Hello',
        date: 1583419770700
      }
    ]
  } 
};

const MessagesMutation = {
  send() {
    return {
      _id: '123',
      sender_id: '12345',
      senderName: 'Artem',
      text: 'Hello',
      date: 1583419770700
    };
  }
};

const resolvers = {
  Query,
  Mutation: {
    messages: () => ({}),
  },
  MessagesMutation
};

export default { typeDefs, resolvers }
