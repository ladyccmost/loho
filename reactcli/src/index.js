import registerServiceWorker from '@/registerServiceWorker';
//引入组件
import Home from '@/components/home.jsx'
import User from '@/components/user.jsx'
import Group from '@/components/group.jsx'
import City from '@/components/city.jsx'
import Kind from '@/components/kind.jsx'
import Detail from '@/components/detail.jsx'
import ErrorBoundary from '@/ErrorBoundary.jsx'
import store from '@/store/index.js'

//引入react模块
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'


//引入css样式
import '@/index.scss';

function show(){
	ReactDOM.render(
		<ErrorBoundary>
			<Router>
				<Switch>
					<Route path='/home' component={Home} />
					<Route path='/user' component={User} />
					<Route path='/group' component={Group} />
					<Route path='/city' component={City} />
					<Route path='/kind' component={Kind} />
					<Route path='/detail' component={Detail} />
					<Redirect to={{ pathname: '/home' }} />
				</Switch>	
			</Router>	
		</ErrorBoundary>,
		document.getElementById('root')
	)
}

show()

store.subscribe(show)

registerServiceWorker();
