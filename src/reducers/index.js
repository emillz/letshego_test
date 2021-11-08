import {combineReducers} from 'redux'
import homeReducer from './HomeReducer'

const Reducers = combineReducers({
    home: homeReducer
})

export default  Reducers