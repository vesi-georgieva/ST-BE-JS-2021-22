import { mergeTypeDefs } from "@graphql-tools/merge";
import userType from "./types/user.js";
import bookType from "./types/book.js";

export default mergeTypeDefs([userType, bookType]);
