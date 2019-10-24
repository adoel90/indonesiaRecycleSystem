import React from 'react';
import logo from './logo.svg';
// import './App.css';

import {useRoutes, navigate } from 'hookrouter';

import ViewOpening from './screen/ViewOpening';
import ViewListTabungan from './screen/ViewListTabungan';
import NotFoundPage from './screen/NotFoundPage';



const App = () => {

  const routes = {
    
    '/': () => <ViewOpening />,
    '/list-products' : () => <ViewListTabungan />
    // '/about': () => <AboutPage />,
    // '/products': () => <ProductOverview />,
    // '/products/:id': ({id}) => <ProductDetails id={id} />
  };
  
  const routeResult = useRoutes(routes);
  
  return (

    routeResult || <NotFoundPage />
    
  );
}

export default App;
