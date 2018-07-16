import registerServiceWorker from '@/registerServiceWorker';
//引入组件
import Home from '@/components/home/home.jsx'
import ShopCar from '@/components/shopCar/shopCar.jsx'
import Login from '@/components/login/login.jsx'
import User from '@/components/user/user.jsx'
import Group from '@/components/group.jsx'
import City from '@/components/city/city.jsx'
import Kind from '@/components/kind/kind.jsx'
import Detail from '@/components/detail/detail.jsx'
import ErrorBoundary from '@/ErrorBoundary.jsx'
import store from '@/store/index.js'

//引入react模块
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'


//引入css样式
import '@/index.scss';

function show(){
	ReactDOM.render(
		<ErrorBoundary>
			<Router>
				<Switch>
					<Route path='/home' component={Home} />
					<Route path='/login' component={Login} />
					<Route path='/user' component={User} />
					<Route path='/kind' component={Kind} />
					<Route path='/group' component={Group} />
					<Route path='/city' component={City} />
					<Route path='/shopCar' component={ShopCar} />
					<Route path='/detail/:from/:goodsId' component={Detail} />
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
