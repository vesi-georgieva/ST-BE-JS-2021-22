export default `
    type Book {
        _id: String!
        title: String!
        description: String!
        rating: Float!
        image: String!
    }
    input CreateBookInput {
        title: String!
        description: String!
        rating: Float!
        image: String!
    }
    type Query {
        book(_id: String!): Book
        books: [Book]
    }
    type Mutation {
        createBook(data: CreateBookInput!): Book
        editBook(_id: String!, data: CreateBookInput!): Book
        deleteBook(_id: String!): Book
    }
`


/*export default `
   
    type Game {
        _id: String!
        title: String!
        description: String!
        rating: Float!
    }

    input CreateGameInput{
        title: String!
        description: String!
        rating: Float!
    }

    type Query{
        game(_id: String!): Game
        games: [Game]
    }

    type Mutation {
        createGame(data: CreateGameInput!): Game
        editGame(_id: String!, data: CreateGameInput!): Game
        deleteGame(_id: String!): Game 
    }
`*/