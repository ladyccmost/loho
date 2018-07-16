//引入react模块
import React, { Component } from 'react'

//引入组件

//引入css样式
import '@/components/shopCar/shopCar.scss'

class ShopCar extends Component {
	constructor (props) {
		super(props)
		this.state = {
			
		}
		
	}
	
	goBack () {
// 		const {flag} = this.props.location.state
// 		this.props.history.push({
// 			pathname: flag,
// 			state: {
// 				flag: '/login'
// 			}
// 		})
	console.log(222)
	}
	
	render () {
		
		return (
			<div className='shopCarWrap'>
				<header>
					<div className='car'>
						<i className='iconfont icon-gouwuche'></i>
						购物车
					</div>
					<div className='goBack' onClick={this.goBack.bind(this)}>
						<i className='iconfont icon-left-trangle1'></i>
					</div>
					<div className='kind'>
						<i className='iconfont icon-fangkuai'></i>
					</div>
				</header>
				<section>
					
				</section>
				
				
			</div>
		)
	}

}

export default ShopCar
