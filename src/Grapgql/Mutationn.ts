import {gql} from '@apollo/client';

export const CREATE_PRODUCT_ITEM = gql`
    mutation createProduct($id: String! $name: String! $image: String! $category: String! $price: Float! $offerPrice: Float! $qty: Float! $expDate: DateTime!){
      createProduct(variables: {
        _id: $id
        name: $name
        image:$image
        price:$price
        discount: $offerPrice
        qty:$qty
        category:$category
        expDate: $expDate
      }){
        _id
        name
        image
        price
        discount
        qty
        category
      }
    }
`;
export const CREATE_USER_MUTATION = gql`
    mutation createUser($id: String! $name: String! $email: String! $password: String! $contact: String!){
      createUser(variables: {
        _id: $id
        name: $name
        email: $email
        contact: $contact
        password: $password
      }){
        _id
        name
        email
        password
        contact
      }
    }
`
export const CHECK_USER = gql`
   mutation getUser($contact: String! $password: String! ){
      getUser(variables: {
        contact: $contact
        password: $password
      }){
        _id
        name
        email
        password
        contact
      }
    }
`;

export const PRODUCT_IMAGE_UPLOAD = gql`
   mutation($file: Upload!) {
    singleUpload(file: $file) {
      filename
      mimetype
      encoding
      url
    }
  }
`;