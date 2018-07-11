//引入react模块
import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Carousel, WingBlank } from 'antd-mobile';

//引入组件
import Tools from '@/tools/detail.js'
import store from '@/store/index.js'
//引入css样式

class Detail extends Component {
	constructor (props) {
		super(props)
		this.state = {
			
		}
	}
	
	
	
	render () {
		
		return (
			<div className='detailWrap'>
				{console.log( store.getState() )}
				<header>
					<div className='goBack'>
						<i className='iconfont icon-left-trangle1'></i>
					</div>
					<div className='kind'>
						<i className='iconfont icon-list'></i>
					</div>
					<div className='shop-car'>
						<i className='iconfont icon-ts-icon-cart'></i>
					</div>
				</header>
				<section>
						<Carousel
							autoplay={true}
							infinite
						>
							{store.getState().homeDetail.map( (item, index) => {
								return (
									<a
										key={item.goodsId}
										style={{ display: 'inline-block', width: '100%' }}
									>
										<img
											src={ item.img }
											alt=""
											style={{ width: '100%', verticalAlign: 'top' }}
											onLoad={() => {
												// fire window resize event to change height
												window.dispatchEvent(new Event('resize'));
												// this.setState({ imgHeight: 'auto' });
											}}
										/>
									</a>
								)
							})}
						</Carousel>
						
						{
							store.getState().homeDetail.map((item, index) => {
								return (<p key={item.goodsId}>{item.title}</p>)
							})
							
							
						}
				</section>
				
				
			</div>
		)
	}

}

export default Detail
