import { gql } from '@apollo/client';

// Ref: Mini Project?? included details about saved books from model
export const GET_ME = gql`
    query me {
        me {
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
