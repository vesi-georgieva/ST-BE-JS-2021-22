import { makeExecutableSchema } from '@graphql-tools/schema';
import typeDefs from "./typeDefs.js";
import resolvers from "./resolvers.js";

export default makeExecutableSchema({
  typeDefs,
  resolvers,
});


/*import { makeExecutableSchema } from '@graphql-tools/schema'
import typeDefs from "./graphql/typeDefs.js";
import resolvers from "./graphql/resolvers.js";
import { Schema } from 'mongoose';

export default makeExecutableSchema({
  typeDefs,
  resolvers,
});*/
