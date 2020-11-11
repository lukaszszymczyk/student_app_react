import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import ListView from './views/ListView/ListView';
import NotFoundView from './views/NotFoundView/NotFoundView';
import GlobalStyle from 'theme/GlobalStyle';
import { Provider } from 'react-redux';
import store from 'store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <>
            <GlobalStyle />
            <Switch>
              <Route exact path="/" component={ListView} />
              <Route path="/notFound" component={NotFoundView} />
              <Redirect from="*" to="/notFound" />
            </Switch>
          </>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
