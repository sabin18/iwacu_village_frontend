import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { useQuery, gql } from "@apollo/client";
const USERS_DATA = gql`
  query {
    staffs {
      id
      
      username
      email
      firstName
      lastName
    }
  }
`;
function staffs() {
  const { loading, error, data } = useQuery(STAFFS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.rates.map(({ firstName, lastName, email }) => (
    <div key={id}>
      <p>
        {firstName}: {lastName}
      </p>
    </div>
  ));
}

const client = new ApolloClient({
  uri: "https://logistics-apx.herokuapp.com/graphql/",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <div className="container">
      <ApolloProvider client={client}>
        <h1>graphql</h1>
        <div>page USERS_DATA</div>
      </ApolloProvider>
    </div>
  );
};

export default App;
