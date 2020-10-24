import React from 'react';
import './App.scss';
import ListWrapper from './components/ListView/ListView';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <div className="heroApp list-unstyled">
    <ListWrapper />
  </div>
);

export default App;
