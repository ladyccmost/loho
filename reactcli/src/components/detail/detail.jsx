//引入react模块
import React, { Component } from 'react'
import { Carousel } from 'antd-mobile';

//引入组件
import Tools from '@/tools/detail.js'
import store from '@/store/index.js'
//引入css样式
import '@/components/detail/detail.scss'

class Detail extends Component {
	constructor (props) {
		super(props)
		this.state = {
		}
	}
	
	componentDidMount () {
		var goodsId = this.props.match.params.goodsId
		Tools.getDetail(goodsId)
	}
	
	goBack () {
// 		var val = this.props.match.params.from
// 		this.props.history.push('/' + val)
		this.props.history.goBack();
	}
	
	
	render () {
		console.log( this.props.history)
		console.log( this.props.match.params)
		return (
			<div className='detailWrap'>
				<header>
					<div className='goBack' onClick={this.goBack.bind(this)}>
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
							style={{width: '100%', height:'2.7rem', background:'white'}}
						>
							{store.getState().detailGetDetail.map( (item, index) => {
								return (
									<a
										key={item.goodsId}
										style={{ display: 'inline-block', width: '100%'}}
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
						<div className='detailTitle'>
							{
								store.getState().detailGetDetail.map((item, index) => {
									return (<p key={item.goodsId}>{item.title}</p>)
								})
							}
							<p>
								<i className='iconfont icon-20'></i>
								<span>分享</span>
							</p>
						</div>
						<div className='detailPrice'>
							{
								store.getState().detailGetDetail.map((item, index) => {
									return (<span key={item.goodsId}>￥{item.price}</span>)
								})
							}
							<span>快递：免运费</span>
							<span>2507人已买</span>
						</div>
						<ul className='detailService'>
							<li><i className='iconfont icon-16pxduigou'></i>线上线下同价</li>
							<li><i className='iconfont icon-16pxduigou'></i>免费验光</li>
							<li><i className='iconfont icon-16pxduigou'></i>7天退换</li>
							<li><i className='iconfont icon-16pxduigou'></i>免费保养</li>
						</ul>
						
				</section>
				<footer>
					<ul>
						<li>
							<span><i className='iconfont icon-kefu4'></i><br />客服</span>
							<span><i className='iconfont icon-shoucang2'></i><br />收藏</span>
						</li>
						<li>预约附近验光点</li>
						<li>加入购物车</li>
					</ul>
				</footer>
				
			</div>
		)
	}

}

export default Detail
