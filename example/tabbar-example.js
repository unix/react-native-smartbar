/**
 * Created by WittBulter on 16/9/7.
 */

import React, {Component} from 'react'
import {View} from 'react-native'

import Index from './index'
import List from './list'
import Me from './me'

import TabBar from '../component/tabbar'

export default class Tabbar extends Component {
	// 构造
	constructor(props) {
		super(props);
		// 初始状态
		this.state = {
			toggle: true,
			index: 2
		}
	}

	render() {
		return (
			<TabBar
				activeColor={'#FE985B'}
				toggle={this.state.toggle}
				ref={tabbar => this.tabbar = tabbar}
				index={this.state.index}
			>
				<TabBar.Item
					icon={require('../../img/ios/dcc_home@2x.png')}
					selectedIcon={require('../../img/ios/dcc_home_on@2x.png')}
					text={'Index'}
				>
					<Index />
				</TabBar.Item>

				<TabBar.Item
					icon={require('../../img/ios/dcc_home_list@2x.png')}
					selectedIcon={require('../../img/ios/dcc_home_list_on@2x.png')}
					text={'List'}
				>
					<List />
				</TabBar.Item>

				<TabBar.Item
					icon={require('../../img/ios/dcc_home_my@2x.png')}
					selectedIcon={require('../../img/ios/dcc_home_my_on@2x.png')}
					text={'Me'}
				>
					<Me />
				</TabBar.Item>
			</TabBar>
		)
	}


}

