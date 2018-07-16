//引入react模块
import React, { Component } from 'react'

//引入组件

//引入css样式
import '@/components/city/city.scss'

class City extends Component {
	constructor (props) {
		super(props)
		this.state = {
			
		}
		
	}
	
	render () {
		
		return (
			<div className='cityWrap'>
				选择城市
			</div>
		)
	}

}

export default City
