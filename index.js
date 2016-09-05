/**
 * Created by WittBulter on 16/9/5.
 */

import React, {Component} from 'react'
import {StyleSheet, View, Text, Image, TouchableHighlight, Dimensions} from 'react-native'

export default class Tabbar extends Component {

	static propTypes = {
		...View.propTypes,
		style: View.propTypes.style
	}
	// 构造
	constructor (props){
		super(props)
		// 初始状态
		this.state = {}
	}

	/**
	 *
	 * @param children {Array} children pages
	 */
	childrenView (children){
		children.map((item, index) =>{
			return (
				<View key={`tabbar-item${index}`}>
					{item}
				</View>
			)
		})
	}

	render (){
		return null
	}





}
const styles = StyleSheet.create({

})