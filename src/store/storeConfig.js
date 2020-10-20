import {createStore, combineReducers} from 'redux'

import selectClientReducer from './reducers/selectClientReducer'
import inputReducer from './reducers/inputReducer'

const reducers = combineReducers({
    inputValue: inputReducer,
    quant: selectClientReducer
})

function storeConfig(){
    return createStore(reducers)
}

export default storeConfig