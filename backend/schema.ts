
import { makeExecutableSchema } from 'graphql-tools';
import merge = require('lodash/merge');
import Scalars from './scalars';

// Modules
import Messages from './resolvers/Messages';

const Modules = {
  typeDefs: [
    Messages.typeDefs,
  ],
  resolvers: merge(
    Messages.resolvers,
  )
};


const schema = makeExecutableSchema({
  typeDefs: [
    ...Scalars.declarations,
    ...Modules.typeDefs
  ],
  resolvers: {
    ...Scalars.resolvers,
    ...Modules.resolvers
  }
});

export default schema;
