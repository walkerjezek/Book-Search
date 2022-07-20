import { gql } from '@apollo/client';


// Reference this from mini project. use token as well

// export const CREATE_MATCHUP = gql`
//   mutation createMatchup($tech1: String!, $tech2: String!) {
//     createMatchup(tech1: $tech1, tech2: $tech2) {
//       _id
//       tech1
//       tech2
//     }
//   }
// `;

// email and password
export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token {
                _id
                username
            }
        }
    } 
`;

// Ref: 21-01-26
export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

// include book details from book.js model
export const SAVE_BOOK = gql`
    mutation saveBook($book: SavedBookInput!) {
        saveBook(book: $book) {
            username
            email
            bookCount
            savedBooks {
                authors
                description
                bookId
                image
                link
                title
            }
        }
    }
`;


export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: String! ) {
        removeBook(bookId: $book) {
            username
            email
            bookCount
            savedBooks {
                authors
                description
                bookId
                image
                link
                title
            }
        }
    }
`;
