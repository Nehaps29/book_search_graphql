import { gql } from '@apollo/client';

export const CREATE_USER = gql`
mutation createUser($username: String!, $email: String!, $password: String!) {
  createUser(username: $username, email: $email, password: $password) {
    User {
      _id
      username
    }
    token
  }
}
`;

export const LOGIN_USER = gql`
  mutation login($username: String, $email: String, $password: String!) {
    login(username: $username, email: $email, password: $password) {
      token
      User {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($userId: ID!, $book: BookInput!) {
    saveBook(userId: $userId, book: $book) {
      User {
      _id
      username
      savedBooks
      }
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation deleteBook($userId: ID!, $bookId: String!) {
    deleteBook(userId: $userId, bookId: $bookId) {
      User {
      _id
      username
      savedBooks
     }
    }
  }
`;
