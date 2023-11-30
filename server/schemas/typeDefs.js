const typeDefs = `
  type User {
    _id: ID!
    username: String!
    email: String!
    savedBooks: [Book]
  }

  type Book {
    _id: ID!
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  input BookInput {
    bookId: String
    title: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    getSingleUser(userId: ID, username: String): User
    me: User
    searchGoogleBooks(query: String!): [Book]
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(userId: ID!, book: BookInput!): User
    deleteBook(userId: ID!, bookId: String!): User
  }
`;

module.exports = typeDefs;
