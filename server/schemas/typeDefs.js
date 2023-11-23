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

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    tech: [User]
    matchups(_id: String): [User]
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    createVote(_id: String!, techNum: Int!): User
  }
`;

module.exports = typeDefs;
