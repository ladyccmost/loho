//引入react模块
import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

//引入组件

//引入css样式

class Group extends Component {
	constructor (props) {
		super(props)
		this.state = {
			
		}
		
	}
	
	render () {
		
		return (
			<div className='groupWrap'>
				团购
			</div>
		)
	}

}

export default Group
