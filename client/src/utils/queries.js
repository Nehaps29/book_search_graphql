import { gql } from '@apollo/client';

export const QUERY_GETSINGLEUSER = gql`
  query getSingleUser {
    User {
      _id
      username
      email
      savedBooks
    }
  }
`;

export const SEARCH_GOOGLE_BOOKS = gql`
  query SearchGoogleBooks($query: String!) {
    searchGoogleBooks(query: $query) {
      bookId: id
      authors
      title
      description
      imageLinks {
        thumbnail
      }
    }
  }
`;


export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      savedBooks
    }
  }
`;