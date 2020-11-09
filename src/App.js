import React from 'react';
import NotFoundView from './views/NotFoundView/NotFoundView';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import ListView from './views/ListView/ListView';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Switch>
            <Route exact path="/" component={ListView} />
            <Route path="/notFound" component={NotFoundView} />
            <Redirect from="*" to="/notFound" />
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}

export default App;
