import React, { Component } from 'react';
import { ThemeProvider } from 'emotion-theming';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Private from './layouts/Private';

import theme from '../themes';
import LoginView from '../components/auth/LoginView';
import UserNewView from '../components/users/UserNewView';
import BoatListView from '../components/boats/BoatListView';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>  
        <BrowserRouter>
          <Switch>
            <Private path="/" exact component={BoatListView} />
            <Route path="/auth/login" exact component={LoginView} />
            <Route path="/users/new" exact component={UserNewView} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default App; 
