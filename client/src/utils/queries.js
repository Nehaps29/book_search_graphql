import { gql } from '@apollo/client';

export const QUERY_GETSINGLEUSER = gql`
  query getSingleUser {
    user {
      _id
      username
      email
      savedBooks
    }
  }
`;


