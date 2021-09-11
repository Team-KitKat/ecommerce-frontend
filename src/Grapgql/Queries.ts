import { gql } from '@apollo/client';
export  const All_PRODUCTS = gql`
    query HomeQuery{
        products {
            _id
            name
            price
            image
            discount
            qty
            category
        }
    }

`;