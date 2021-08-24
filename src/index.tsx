import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from "./redux/store";
//import {ApolloClient} from 'apollo-boost'
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    gql, createHttpLink
} from "@apollo/client";
/*
const client = new ApolloClient({
    uri: 'https://manakal-api.herokuapp.com',
    cache: new InMemoryCache()
});
*/
const client = new ApolloClient({
    link:createHttpLink({
        uri:'http://localhost:3001/graphql',
        //uri:'https://manakal-api.herokuapp.com',
    }),
    cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
  <ApolloProvider client={client}>
      <Provider store={store}>
          <App />
      </Provider>
  </ApolloProvider>
      
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
