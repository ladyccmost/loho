import axios from 'axios'
import server from '@/tools/server.js'
import store from '@/store/index.js'

export default {
	getDetail (goodsId) {
		axios.get( server.detail_getDtail + '?goodsId=' + 6430 )
			.then( (res) => {
				store.dispatch({
					type: 'GET_DETAIL_DETAIL',
					data: res.data
				})
			})
			.catch( (err) => { console.log(err) })
	},
	
}

