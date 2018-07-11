//引入react模块
import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

//引入组件

//引入css样式

class Kind extends Component {
	constructor (props) {
		super(props)
	}
	/* welcome () {
		console.log( 'welcome     ' + username );
	}
	goodbye () {
		console.log( 'goodbye     ' + username );
	}
	wrapWithUsername (aaa) {
		let newFn = () => {
			let username = localStorage.getItem('username');
			aaa(username);
		}
		return newFn;
	}
	welcome = wrapWithUsername(welcome)
	goodbye = wrapWithUsername(goodbye)
	 */
	render () {
		/* this.welcome()
		this.goodbye() */
		return (
			<div className='kindWrap'>
				眼镜分类
			</div>
		)
	}

}

export default Kind
