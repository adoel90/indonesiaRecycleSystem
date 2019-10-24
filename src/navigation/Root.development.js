import React from 'react'
// import { Provider } from 'react-redux';
import { Route, BrowserRouter, Link, Switch } from 'react-router-dom';

import ViewOpening from '../screen/ViewOpening';
import ViewSwitch from '../screen/ViewSwitch';




const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  
    <Route {...rest} render={props => (
  
      <Layout>
        <Component {...props} />
      </Layout>
  
    )} />
    
  );

const OpeningLayout = (props) => {

    return (
  
        <div>
          {/* <Header /> */}
          {props.children}  
        </div>
  
    );
};


const Root = () => (
 
    // <Provider>
        <div>
            <Switch>
                <AppRoute exact path="/" layout={OpeningLayout} component={ViewOpening} />

            </Switch>
        </div>
    // </Provider>
);


export default Root;
    