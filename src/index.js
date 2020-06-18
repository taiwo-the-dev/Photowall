import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import './stylesheet/style.css';
import {BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './redux/reducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';


const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>,
    document.getElementById('root')
)
