import { createStore, applyMiddleware } from 'redux'
import { finalReducer } from './reducers'
import thunk from 'redux-thunk' // dispatch本来只能接收对象，thunk可以让dispatch接收函数为参数
import promiseMiddleware  from 'redux-promise' // 可以让dispatch接收promise对象
import logger from 'redux-logger'

const store = createStore(finalReducer, applyMiddleware(thunk, promiseMiddleware, logger))

export default store
