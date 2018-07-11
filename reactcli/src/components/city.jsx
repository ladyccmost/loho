//引入react模块
import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

//引入组件

//引入css样式

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
