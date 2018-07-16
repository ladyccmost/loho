//引入react模块
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, WingBlank } from 'antd-mobile';


//引入组件
import Tools from '@/tools/home.js'
import store from '@/store/index.js'

//引入css样式
import '@/components/home/home.scss'

class Home extends Component {
	constructor (props) {
		super(props)
		this.state = {
			bannerImgList: [],
			styleUpImg: '',
			popularList: [],
			lastList: [],
			identicalList: []
		}
	}
	
	componentDidMount () {
		Tools.getBannerImg( this.getBannerImgSuccess.bind(this) )
		Tools.getKindInfo()
		Tools.getStyleUpImg( this.getStyleUpImgSuccess.bind(this) )
		Tools.getPopularList( this.getPopularListSuccess.bind(this) )
		Tools.getLastList( this.getLastListSuccess.bind(this) )
		Tools.getIdenticalList( this.getIdenticalListSuccess.bind(this) )
	}
	
	getLastListSuccess (data) {
		this.setState({
			lastList: data
		})
	}
	
	getPopularListSuccess (data) {
		this.setState({
			popularList: data
		})
	}
	
	getBannerImgSuccess (data) {
		this.setState({
			bannerImgList: data
		})
	}
	
	getIdenticalListSuccess (data) {
		this.setState({
			identicalList: data
		})
	}
	
	getStyleUpImgSuccess (data) {
		this.setState({
			styleUpImg: data[0].pic
		})
	} 
	
	goUserPage () {
		this.props.history.push({
			pathname: '/user',
			state: {
				flag: '/home'
			}
		})
	}
	
	goDetailPage (goodsId) {
		this.props.history.push('/detail/home/' + goodsId )
	}
	
	render () {
		return (
			<div className='homeWrap'>
				<header>
					<div className='city-select'>
						<Link to={ '/city' }>
							北京市&nbsp;&nbsp;
							<i className='iconfont icon-down-trangle-copy'></i>
						</Link>
					</div>
					<div className='logo'></div>
					<div className='to-user' onClick={this.goUserPage.bind(this)}>
						<i className='iconfont icon-yonghu-xianxing'></i>
					</div>
					<div className='shop-car'>
						<Link to={ '/shopCar' }>
							<i className='iconfont icon-ts-icon-cart'></i>
						</Link>
					</div>
				</header>
				<section>
					<div className='home-banner'>
						<WingBlank>
							<Carousel
								autoplay={true}
								infinite
							>
								{this.state.bannerImgList.map( (item, index) => {
									return (
										<a
											key={item._id}
											style={{ display: 'inline-block', width: '100%' }}
										>
											<img
												src={ item.pic }
												alt=""
												style={{ width: '100%', verticalAlign: 'top' }}
												onLoad={() => {
													// fire window resize event to change height
													window.dispatchEvent(new Event('resize'));
													this.setState({ imgHeight: 'auto' });
												}}
											/>
										</a>
									)
								})}
							</Carousel>
						</WingBlank>
					</div>
					<ul className='kind-list'>
					{
						store.getState().homeKindInfo.map((item,index) => {
							return (
								<li key={item.cid}>
									<Link to={ '/kind' }>
										<img src={item.pic} alt='' />
										<p>{item.tag}</p>
									</Link>
								</li>
							)
						})
					}	
					</ul>
					<div className='style-up'>
						<Link to={ '/kind' }>
							<img src={this.state.styleUpImg} alt='' />
						</Link>
					</div>
					{
						this.state.popularList.map((item,index) => {
							return (
								<div className='popular' key={item._id}>
									<div className='popular-header'>
										<span className='sidelined'></span>
										<h3>
											<span>{item.title}</span>
											<Link to={ '/kind' }>
												<span>更多<i className='iconfont icon-arrow-left'></i></span>
											</Link>
										</h3>
									</div>
									<Link to={ '/kind' } className='popular-img'>
										<img src={item.img} alt='' />
									</Link>
									<ul className='popular-list'>
										{
											item.gid.map( (itm,idx) => {
												return (
													<li className='popular-list-li' key={itm} onClick={this.goDetailPage.bind(this,item.gid[idx])}>
														
														<p className='popular-list-title'>{item.tag[idx]}</p>
														<p className='popular-list-e-title'>{item.tag_en[idx]}</p>
														<img className='popular-list-img' src={item.pic[idx]} alt='' />
													</li>
												)
											})
										}
										
									</ul>
									
									
									
								</div>
							)
						})
					}
					{
						this.state.identicalList.map((item, index) => {
							return (
								<div className='identical' key={item._id}>
									<div className='identical-header'>
										<span className='sidelined'></span>
										<h3>
											<span>{item.title}</span>
											<Link to={ '/kind' }>
												<span>更多<i className='iconfont icon-arrow-left'></i></span>
											</Link>
										</h3>
									</div>
									<Link to={ '/kind' } className='identical-img'>
										<img src={item.img} alt='' />
									</Link>
									<ul className='identical-list'>
										{
											item.gid.map((itm,idx) => {
												return (
													<li className={"identical-list-li-" + idx} key={itm} onClick={this.goDetailPage.bind(this,item.gid[idx])}>
												
														<p className='identical-list-title'>{item.tag[idx]}</p>
														<p className='identical-list-e-title'>{item.tag_en[idx]}</p>
														<img className='identical-list-img' src={item.pic[idx]} alt='' />
													</li>
												)
											})
										}
									</ul>
								</div>
							)
						})
					}
					
					
					
					{
						this.state.lastList.map((item,index) => {
							return (
								<div className='last' key={item._id}>
									<div className='last-header'>
										<span className='sidelined'></span>
										<h3>
											<span>{item.title}</span>
											<Link to={ '/kind' }>
												<span>更多<i className='iconfont icon-arrow-left'></i></span>
											</Link>
										</h3>
									</div>
									<Link to={ '/kind' } className='last-img'>
										<img src={item.img} alt='' />
									</Link>
									<ul className='last-list'>
										{
											item.gid.map( (itm,idx) => {
												return (
													<li className='last-list-li' key={itm} onClick={this.goDetailPage.bind(this,item.gid[idx])}>
														
														<p className='last-list-title'>{item.tag[idx]}</p>
														<p className='last-list-e-title'>{item.tag_en[idx]}</p>
														<img className='last-list-img' src={item.pic[idx]} alt='' />
													</li>
												)
											})
										}
									</ul>
								</div>
							)
						})
					}
					<div className='home-bottom'>
						<div className='home-bottom-top'>
							<div className='home-bottom-top-left'>
								<Link to={ '/kind' }>
									<i className='iconfont icon-location1'></i>
									欢迎到体验店试戴
								</Link>
							</div>
							<div className='home-bottom-top-right'>
								<i className='iconfont icon-dianhuaico'></i>
								<a href='tel:400-887-1920'>预约热线：400-887-1920</a><br />
								<span>（服务时间 9:00 - 23:00）</span>
							</div>
						</div>
						<div className='home-bottom-center'>
							<img src='http://m.loho88.com/assets/images/logo.png' alt='' />
						</div>
						<div className='home-bottom-bottom'>
							<p>ICP备案证书号：粤ICP备11106081</p>
							<a href='http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030602002157'>
								<img src='http://www.beian.gov.cn/img/ghs.png' alt='' />
								粤公网安备 44030602002157号
							</a>
							<p>©2005-2018 深圳市乐活电子商务有限公司-时尚眼镜品牌 版权所有，并保留所有权利</p>
						</div>
					</div>
				</section>
				<footer>
					<div>
						<i className='iconfont icon-shouye'></i>
						<p>首页</p>
					</div>
					<div>
						<i className='iconfont icon-tuangou1'></i>
						<p>团购</p>
					</div>
					<div>
						<i className='iconfont icon-kefu'></i>
						<p>客服</p>
					</div>
					<div>
						<i className='iconfont icon-fujin'></i>
						<p>附近体验店</p>
					</div>
					<div onClick={this.goUserPage.bind(this)}>
						<i className='iconfont icon-wode'></i>
						<p>我的</p>
					</div>
				</footer>
			</div>
		)
	}

}

export default Home
