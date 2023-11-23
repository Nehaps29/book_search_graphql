const { Tech, Matchup } = require('../models');
const { GraphQLError } = require("graphql")
const resolvers = {
  Query: {
    tech: async () => {
      return Tech.find({});
    },
    matchups: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Matchup.find(params);
    },
  },
  Mutation: {
    createUser: async (parent, args) => {
      const matchup = await Matchup.create(args);
      return matchup;
    },
    login: async (parent, { email, password }) => {
      
    },
  },
};

module.exports = resolvers;
