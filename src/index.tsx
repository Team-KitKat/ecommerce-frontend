import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {ApolloClient, ApolloProvider, from, HttpLink, InMemoryCache} from "@apollo/client";
import {onError} from "@apollo/client/link/error";

const httpLink = new HttpLink({
    uri: "http://localhost:4000/graphql"
});

const errorLink = onError(({graphQLErrors, networkError}) => {
    if (graphQLErrors)
        graphQLErrors.forEach(({message, locations, path}) =>
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
            ),
        );
    if (networkError) console.log(`[Network error]: ${networkError}`);
});

const client = new ApolloClient({
    link: from([errorLink, httpLink]),
    cache: new InMemoryCache()
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
