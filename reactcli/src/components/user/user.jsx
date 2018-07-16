//引入react模块
import React, { Component } from 'react'

//引入组件

//引入css样式
import '@/components/user/user.scss'

class User extends Component {
	constructor (props) {
		super(props)
		this.state = {
			
		}
		
	}
	
	
	componentDidMount () {
		if(localStorage.getItem('isLogin') == 0){
			const {flag} = this.props.location.state
			this.props.history.push({
				pathname: '/login',
				state: {
					flag: flag
				}
			})
		}
	}
	
	
	render () {
		
		return (
			<div className='userWrap'>
				<header>
					
				</header>
				<section>
					
				</section>
				<footer>
					
				</footer>
			</div>
		)
	}

}

export default User
