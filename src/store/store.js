import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!
export default createStore (
  rootReducer,
  {currentVideo: exampleVideoData[0], videoList: exampleVideoData},
  applyMiddleware(thunk)
);
//what this middleware does is if redux gets a function instead of an object it would save it for later and pass the dispatch function into that function