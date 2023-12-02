const typeDefs = `
  type User {
    _id: ID! 
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: ID!
    authors: [String]
    description: String!
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
    
    me: User
    
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(userId: ID!, book: BookInput!): User
    deleteBook(userId: ID!, bookId: String!): User 
  }
`;

module.exports = typeDefs;
