export default `
    input UserInput {
        email: String!
        password: String!
        games: [String]
        firstName: String!
        lastName: String!
        roles: [String]
    }
    type User {
        _id: String!
        email: String!
        password: String!
        firstName: String!
        lastName: String!
        games: [Game]
        roles: [String]
    }
    type Query {
        user(_id: String!): User
        users: [User]
        currentUser: User
    }
    type Mutation {
        createUser(data: UserInput!): User
        editUser(_id: String!, data: UserInput!): User
        deleteUser(_id: String!): User
        login(email: String!, password: String!): String
        logout: User
    }
`



/*export default `
    input UserInput{
        email: String!
        password: String!
        firstName: String!
        lastName: String!
        games: [String]
    }

    type User {
        _id: String!
        email: String!
        password: String!
        firstName: String!
        lastName: String!
        games: [Game]
    }

    type Query{
        user(_id: String!): User
        users: [User]
        currentUser: User
    }

    type Mutation {
        createUser(data: UserInput!): User
        editUser(_id: String!, data: UserInput!): User
        deleteUser(_id: String!): User 
        login(email: String!, password: String!): String
        logout: User
    }
`*/