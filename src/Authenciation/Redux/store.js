import { createStore } from 'redux'
import Reducer from './Reducer/Reducer'
import thunkMiddleware from 'redux-thunk'
import {  applyMiddleware } from 'redux'

export default createStore(Reducer,applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    ))