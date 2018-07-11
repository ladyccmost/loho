import {createStore, combineReducers} from 'redux'

import { homeKindInfo, homeDetail } from '@/store/home.js'

const reducer = combineReducers({
	homeKindInfo,
	homeDetail
})

const store = createStore(reducer)

export default store
