import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import { 
  ApolloClient, 
  ApolloProvider, 
  createHttpLink, 
  InMemoryCache 
  } from '@apollo/client';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';


// Ref: 21-01-25
const httpLink = createHttpLink({
  uri: '/graphql',
});


// Ref: 21-01-25
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});


// Mini Project
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});



function App() {
  return (
    <ApolloProvider client={client}>
            <Router>
              <>
                <Navbar />
                <Routes>
                  <Route 
                    path='/' 
                    element={<SearchBooks />} 
                  />
                  <Route 
                    path='/saved' 
                    element={<SavedBooks />} 
                  />
                  <Route 
                    path='*'
                    element={<h1 className='display-2'>Wrong page!</h1>}
                  />
                </Routes>
              </>
            </Router>
    </ApolloProvider>
  );
}

export default App;
