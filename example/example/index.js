/**
 * Created by WittBulter on 16/9/7.
 */

import React, {Component} from 'react'
import {View, Text} from 'react-native'

export default class Index extends Component {
	// 构造
	constructor (props){
		super(props)
		// 初始状态
		this.state = {}
	}
	render (){
		return (
			<View style={{flex: 1, justifyContent: 'center', alignSelf: 'center'}}>
				<Text style={{fontSize: 25}}>index page</Text>
			</View>
		)
	}
}