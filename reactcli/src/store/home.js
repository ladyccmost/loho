export const homeKindInfo = ((state = [], {type, data}) => {
	if( type == 'GET_HOME_KINDINFO' ){
		state = data
	}
	return state
})
export const homeDetail = ((state = [], {type, data}) => {
	if( type == 'GET_HOME_DETAIL' ){
		state = data
	}
	return state
})
