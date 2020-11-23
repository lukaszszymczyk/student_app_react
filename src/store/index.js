import recuder from 'reducers';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(recuder, composeWithDevTools(applyMiddleware(thunk)));

export default store;
