import {combineReducers, createStore} from 'redux';

export default (reducer = {}) => createStore(combineReducers(reducer));
