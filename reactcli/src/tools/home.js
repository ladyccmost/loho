import axios from 'axios'
import server from '@/tools/server.js'
import store from '@/store/index.js'

export default {
	getBannerImg (cb) {
		axios.get( server.home_getBannerImg )
			 .then( (res) => { cb(res.data) })
			 .catch( (err) => { console.log(err) })
	},
	getKindInfo () {
		axios.get( server.home_getKindInfo )
			.then( (res) => {
				store.dispatch({
					type: 'GET_HOME_KINDINFO',
					data: res.data
				})
			})
			.catch( (err) => { console.log(err) })
	},
	
	getDetail (goodsId) {
		axios.get( server.home_getDtail + '?goodsId=' + 6430 )
			.then( (res) => {
				store.dispatch({
					type: 'GET_HOME_DETAIL',
					data: res.data
				})
			})
			.catch( (err) => { console.log(err) })
	},
	
	getStyleUpImg (cb) {
		axios.get( server.home_getStyleUpImg )
			.then( (res) => { cb(res.data) })
			.catch( (err) => { console.log(err) })
	},
	getPopularList (cb) {
		axios.get( server.home_getPopularList )
			.then( (res) => { cb(res.data) })
			.catch( (err) => { console.log(err) })
	},
	getLastList (cb) {
		axios.get( server.home_getLastList )
			.then( (res) => { cb(res.data) })
			.catch( (err) => { console.log(err) })
	},
	getIdenticalList (cb) {
		axios.get( server.home_getIdenticalList )
			.then( (res) => { cb(res.data) })
			.catch( (err) => { console.log(err) })
	}
	
	
}

