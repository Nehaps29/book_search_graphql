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



export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      savedBooks
    }
  }
`;