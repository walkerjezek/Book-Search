const { gql } = require('apollo-server-express');

// Structure from Challenge ReadMe
const typeDefs = gql`
    type Query {
        me: User
        users: [User]
        user(username: String!): User
        books(username: String): [Book]
        book(bookId: String!): Book
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(book: SavedBookInput): User
        removeBook(bookId: String!): User
    }
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }
    type Book {
        _id: ID
        authors: [String]
        description: String
        bookId: String
        image: String
        link: String
        title: String
    }

    type Auth {
        token: ID!
        user: User
    }

`;

module.exports = typeDefs;