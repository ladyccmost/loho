//引入react模块
import React, { Component } from 'react'

//引入组件

//引入css样式
import '@/components/kind/kind.scss'

class Kind extends Component {
	constructor (props) {
		super(props)
	}
	
	render () {
		return (
			<div className='kindWrap'>
				眼镜分类
			</div>
		)
	}

}

export default Kind
