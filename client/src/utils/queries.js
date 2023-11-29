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


