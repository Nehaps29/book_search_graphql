import { gql } from '@apollo/client';


export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      savedBooks {
        bookId
        authors
        description
        image
        link
        title
      }
    }
  }
`;