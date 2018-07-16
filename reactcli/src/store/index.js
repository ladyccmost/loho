import {createStore, combineReducers} from 'redux'

import { homeKindInfo } from '@/store/home.js'
import { detailGetDetail } from '@/store/detail.js'

const reducer = combineReducers({
	homeKindInfo,
	detailGetDetail
})

const store = createStore(reducer)

export default store
