export const detailGetDetail = ((state = [], {type, data}) => {
	if( type === 'GET_DETAIL_DETAIL' ){
		state = data
	}
	return state
})
