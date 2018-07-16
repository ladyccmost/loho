//引入react模块
import React, { Component } from 'react'

//引入组件

//引入css样式
import '@/components/login/login.scss'

class Login extends Component {
	constructor (props) {
		super(props)
		this.state = {
			
		}
		
	}
	
	componentDidMount () {
		this.refs.phoneLogin.style.borderBottom = '2px solid #e8343b'
		this.refs.phoneLogin.style.color = '#e8343b'
	}
	
	goBack () {
		const {flag} = this.props.location.state
		this.props.history.push({
			pathname: flag,
			state: {
				flag: '/login'
			}
		})
	}
	
	changePhoneLogin () {
		this.refs.phoneLogin.style.borderBottom = '2px solid #e8343b'
		this.refs.phoneLogin.style.color = '#e8343b'
		this.refs.accountLogin.style.borderBottom = ''
		this.refs.accountLogin.style.color = '#000'
		this.refs.phoneLoginContent.style.display = 'block'
		this.refs.accountLoginContent.style.display = 'none'
	}
	changeAccountLogin () {
		this.refs.accountLogin.style.borderBottom = '2px solid #e8343b'
		this.refs.accountLogin.style.color = '#e8343b'
		this.refs.phoneLogin.style.borderBottom = ''
		this.refs.phoneLogin.style.color = '#000'
		this.refs.accountLoginContent.style.display = 'block'
		this.refs.phoneLoginContent.style.display = 'none'
	}
	
	render () {
		
		return (
			<div className='loginWrap'>
				<header>
					
					<div className='goBack' onClick={this.goBack.bind(this)}>
						<i className='iconfont icon-left-trangle1'></i>
					</div>
					<div className='login'>登录</div>
					<div className='kind'>
						<i className='iconfont icon-list'></i>
					</div>
					<div className='shop-car'>
						<i className='iconfont icon-ts-icon-cart'></i>
					</div>
				</header>
				<section>
					<img className='bannerImg' src='http://m.loho88.com/assets/images/login-banner.png' alt='' />
					<div className='loginTab'>
						<div className='loginTabOne' ref='phoneLogin' onClick={this.changePhoneLogin.bind(this)}>
							手机号码快速登录
						</div>
						<div ref='accountLogin' onClick={this.changeAccountLogin.bind(this)}>
							账号密码登录
						</div>
					</div>
					<form className='loginContent' ref='phoneLoginContent'>
						<div>
							<i className='iconfont icon-shurushoujihao'></i>
							<input placeholder='请输入您的手机号码' type='number' name='userPhone' ref='userPhone' />
						</div>
						<div>
							<i className='iconfont icon-yanzhengma2'></i>
							<input placeholder='请输入图片验证码' type='number' name='userImgCode' ref='userImgCode' />
							<p>
								<img src='http://m.loho88.com/code/mobile/getCaptchaCode?0.5529358042865629' alt='' />
							</p>
						</div>
						<div>
							<i className='iconfont icon-yanzhengma'></i>
							<input placeholder='请输入短信验证码' type='number' name='userPCode' ref='userPCode' />
							<p className='sendCode'>
								发送验证码
							</p>
						</div>
					</form>
					<form className='loginContent accountLoginContent' ref='accountLoginContent'>
						<div>
							<i className='iconfont icon-yonghu3'></i>
							<input placeholder='请输入手机号' type='number' name='userPhone' ref='userPhone' />
						</div>
						<div>
							<i className='iconfont icon-mimasuo'></i>
							<input placeholder='请输入密码' type='password' name='userPwd' ref='userPwd' />
						</div>
						<div>
							<i className='iconfont icon-yanzhengma2'></i>
							<input placeholder='请输入验证码' type='number' name='userCode' ref='userCode' />
							<p>
								<img src='http://m.loho88.com/code/mobile/getCaptchaCode?0.3891969193592171' alt='' />
							</p>
						</div>
					</form>
				</section>
				<footer>
					<div>注册</div>
					<div>登录</div>
				</footer>
			</div>
		)
	}

}

export default Login
