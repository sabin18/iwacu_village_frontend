import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import './i18n';
import { Provider } from 'react-redux';
import { ApolloClient, ApolloProvider, InMemoryCache, ApolloLink, HttpLink, split } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import store from './store';
import AUTH_TOKEN from "./helpers/jwt-token-access/accessToken";
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';

const apiUrl = process.env.REACT_APP_API;

const httpLink = new HttpLink({ uri: apiUrl });

const language =localStorage.getItem('language')

const headers = {
  'accept-language':language?`${language}`: "",
}

// const authMiddleware = (authToken) =>
//   new ApolloLink((operation, forward) => {
//     operation.setContext({
//       headers: {
//        ...headers
//       },
//     });
//     if (authToken) {
//       operation.setContext({
//         headers: {
//           ...headers,
//           authorization: `JWT ${authToken}`,
//         },
//       });
//     }

    
//     return forward(operation);
//   });

// const authToken = localStorage.getItem('auth-token');

// const urlLink = createUploadLink({
//   uri: process.env.REACT_APP_API,
// })

// const wsLink = new WebSocketLink({
//   uri: process.env.REACT_APP_SOCKET,
//   options: {
//     reconnect: true,
//     connectionParams: {
//       authToken:authToken,
//     },
//   },
// });

// const splitLink = split(
//   ({ query }) => {
//     const definition = getMainDefinition(query);
//     return (
//       definition.kind === 'OperationDefinition' &&
//       definition.operation === 'subscription'
//     );
//   },
//   wsLink,
//   urlLink,
// );

// const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   link: authMiddleware(authToken).concat(splitLink),
// });

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();