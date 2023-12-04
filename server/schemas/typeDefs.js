const typeDefs = `
  type User {
    _id: ID! 
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }

  input BookInput {
    bookId: ID!
    authors: [String]
    description: String
    title: String!
    image: String
    link: String
  }
  
  type Book {
    bookId: ID!
    authors: [String]
    description: String
    image: String
    link: String
    title: String!
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
    saveBook( input: BookInput!): User
    deleteBook(bookId: ID!): User 
  }
`;

module.exports = typeDefs;
