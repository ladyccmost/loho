//引入组件
import Home from '@/components/home.jsx'
import User from '@/components/user.jsx'
import Group from '@/components/group.jsx'
import ErrorBoundary from './ErrorBoundary.jsx'

//引入react模块
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

//引入css样式
import './main.scss'

ReactDOM.render(
	<ErrorBoundary>
		<Router>
			<Switch>
				<Route path='/home' component={Home} />
				<Route path='/user' component={User} />
				<Route path='/group' component={Group} />
				<Redirect to={{ pathname: '/home' }} />
			</Switch>	
		</Router>	
	</ErrorBoundary>,
	document.getElementById('root')
)
