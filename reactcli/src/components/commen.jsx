//引入react模块
import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

//引入组件

//引入css样式

class commen extends Component {
	constructor (props) {
		super(props)
		this.state = {
			username: ''
		}
	}
	
	componentDidMount () {
		wrapWithUsername (fn) {
			let newFn = () => {
				let username = localStorage.getItem('username');
				fn(username);
			}
			return newFn;
		}
		
	}
	
	render () {
		return (
			<div className='kindWrap'>
				眼镜分类
				
			</div>
		)
	}

}

export default Kind
