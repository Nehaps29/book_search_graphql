import { gql } from '@apollo/client';

export const CREATE_USER = gql`
mutation createUser($username: String!, $email: String!, $password: String!) {
  createUser(username: $username, email: $email, password: $password) {
    user {
      _id
      username
    }
    token
  }
}
`;

export const LOGIN_USER = gql`
  mutation login( $email: String!, $password: String!) {
    login( email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($input: BookInput!) {
    saveBook(input: $input) {
      username 
      savedBooks {
        bookId
        title
        description
        authors
      }   
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation deleteBook($userId: ID!, $bookId: String!) {
    deleteBook(userId: $userId, bookId: $bookId) {
      user {
      _id
      username
      savedBooks {
        bookId
        title
      }
     }
    }
  }
`;
