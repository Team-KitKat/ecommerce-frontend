import {gql} from "@apollo/client";

export const LOAD_PRODUCTS= gql`
      query {
          getAllProducts {
            id
            image
            name
            category
            qty
            price
            discount
            total
          }
        }
`;