import { legacy_createStore,applyMiddleware } from "redux"
import reducers from "./reducers"
import {thunk} from 'redux-thunk'

export const store=legacy_createStore(reducers,{},applyMiddleware(thunk))

// if you access overall acess this then vist index.js page
