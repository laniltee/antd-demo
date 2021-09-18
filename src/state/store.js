import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import * as reducers from './reducers'
import apiReducer, { apiMiddleware } from '../api'

export const rootReducer = combineReducers({ ...reducers, ...apiReducer })

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiMiddleware),
})

export default store
