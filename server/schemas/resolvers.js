const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
   

     // By adding context to our query, we can retrieve the logged in user without specifically searching for them
     me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw AuthenticationError;
    },
    /*
    
    
    */

    
      // searchGoogleBooks: async (_, { query }) => {
      //   try {
      //     const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
      //     const data = await response.json();
  
      //     if (data.items) {
      //       return data.items.map((item) => ({
      //         bookId: item.id,
      //         authors: item.volumeInfo.authors || [],
      //         title: item.volumeInfo.title || '',
      //         description: item.volumeInfo.description || '',
      //         imageLinks: item.volumeInfo.imageLinks || {},
      //       }));
      //     }
  
      //     return [];
      //   } catch (error) {
      //     console.error(error);
      //     return [];
      //   }
      // },
    
  },

  Mutation: {
    createUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });

      if (!user) {
        throw AuthenticationError;
      }

      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { username, email, password }) => {
      const user = await User.findOne({ $or: [{ username }, { email }] });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);
      return { token, user };
    },

    saveBook: async (parent, { userId, book }) => {
      const updatedUser = await User.findOneAndUpdate(
        { _id: userId },
        { $addToSet: { savedBooks: book } },
        { new: true, runValidators: true }
      );

      if (!updatedUser) {
        throw AuthenticationError;
      }

      return updatedUser;
    },

    deleteBook: async (parent, { userId, bookId }) => {
      const updatedUser = await User.findOneAndUpdate(
        { _id: userId },
        { $pull: { savedBooks: { bookId } } },
        { new: true }
      );

      if (!updatedUser) {
        throw AuthenticationError;
      }

      return updatedUser;
    },
  },
};

module.exports = resolvers;
