
import { mergeResolvers } from "@graphql-tools/merge";
import userResolver from "./resolvers/user.js";
import bookResolver from "./resolvers/book.js";
export default mergeResolvers([userResolver, bookResolver]);



