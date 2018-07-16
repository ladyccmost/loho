import React,{Component} from 'react'
import {HashRouter as Router,Route,Link,Switch,Redirect} from 'react-router-dom'

import {GROUP_LIST_URL} from '@/tools/server.js'

import './group.scss'


class Group extends Component{
    constructor (props) {
        super (props)
        this.state = {
            grouplist: [],
            goodsId: '',
            Price: '',
            shopPrice: '',
            goodsName: '',
            imgThumb: ''
        }
    }

    componentDidMount () {
        fetch('http://10.9.171.195:3000/api/group')
            .then((res) => {return res.json()})
            .then((data) => {
                this.setState({
                    grouplist: data
                })
            })
            .catch((err) => {console.log(err)})
    }

    goBank(){
        console.log(this.props)
        const {flag}  = this.props.location.state
        this.props.history.push({
            pathname:flag,
            state: {
                flag: '/user'
            }
        })
    }

    render () {

        return(
            <div id="group">
                <div className="container_group">
                    <header>
                        <i className="iconfont icon-gengduo1" onClick={this.goBank.bind(this)}></i>
                        <span>团购分类</span>
                        <i className="iconfont icon-fangkuai"></i>
                    </header>
                    <div className="content_group">
                        <div id='pullDown'>
                            <div className='pullDownLabel'></div>
                        </div>
                        <div className='pulldown-tips'>下拉刷新</div>
                        <ul id='groupList'>
                            {
                                this.state.grouplist.map((item,index) => {
                                    return(
                                        <li  key={item.goodsId}>
                                            <Link to={'@/components/detail/detail.jsx/'+item.goodsId}>
                                                <img src={item.imgThumb[0]} alt=""/>
                                                <div className="description_g">
                                                    {item.goodsName}
                                                </div>
                                                <div className="pricewrap">
                                                    <div>
                                                        <span>优惠价:￥</span><span>{item.Price}</span>
                                                    </div>
                                                    <p>￥{item.shopPrice}</p>
                                                </div>
                                                <div className="btn">
                                                    <p>点击下单购买<i className='iconfont icon-arrow-left'></i></p>
                                                </div>
                                            </Link>
                                        </li>
                                    )

                                })
                            }
                        </ul>
                        <div id='pullUp'>
                            <div className='pullUpLabel'>加载更多</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Group
