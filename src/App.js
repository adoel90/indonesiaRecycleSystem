import React from 'react';
import logo from './logo.svg';
// import './App.css';

import {useRoutes, navigate } from 'hookrouter';

import ViewOpening from './screen/ViewOpening';
import ViewListTabungan from './screen/ViewListTabungan';
import ViewQuestionOne from './screen/ViewQuestionOne';
import ViewQuestionScenarioJemput from './screen/ViewQuestionScenarioJemput';
import ViewScenarioSettingMapGojek from './screen/ViewScenarioSettingMapGojek';
import ViewLoadingGojek from './screen/ViewLoadingGojek';




import NotFoundPage from './screen/NotFoundPage';



const App = () => {

  const routes = {
    
    '/': () => <ViewOpening />,
    '/list-products' : () => <ViewListTabungan />,
    '/question-one': () => <ViewQuestionOne />,
    '/question-scenario-jemput-gojek': () => <ViewQuestionScenarioJemput />,
    '/map-gojek': () => <ViewScenarioSettingMapGojek />,
    '/loading-gojek': () => <ViewLoadingGojek />

    
  };
  
  const routeResult = useRoutes(routes);
  
  return (

    routeResult || <NotFoundPage />
    
  );
}

export default App;
