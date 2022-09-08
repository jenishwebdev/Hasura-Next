import '../styles/globals.css'
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_BASE_URL_AUTH,
});

const authLink = setContext((_, { headers }) => {
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      "x-hasura-admin-secret": process.env.REACT_APP_X_HASURA_ADMIN_SECRET,
    }
  }
}); 

const client = () => {
  console.log("authLink.concat(httpLink)", httpLink);
  return new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});} 

const MyApp = ({ Component, pageProps }) => {

  return <ApolloProvider client={client()}><Component {...pageProps} /></ApolloProvider>
};

export default MyApp;