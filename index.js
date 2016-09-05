/**
 * Created by WittBulter on 16/9/5.
 */

import React, {Component} from 'react'
import {StyleSheet, View, Text, Image, TouchableHighlight, Dimensions} from 'react-native'
import Item from './item'

export default class Tabbar extends Component {

	static propTypes = {
		...View.propTypes,
		style: View.propTypes.style
	}
	static Item = Item
	// 构造
	constructor (props){
		super(props)
		// 初始状态
		this.state = {}
		this.children = '2'
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

	/**
	 *
	 * @param children {Array} children pages footer
	 */
	footerBar (children){
		children.map((item, index) =>{
			return (
				<TouchableHighlight>
					<View>
						<Image source={item.props.icon}/>
						<Text>1</Text>
					</View>
				</TouchableHighlight>
			)
		})
	}

	render (){
		return (
			<View>
				<View>
					{/*{this.content}*/}
				</View>
				<View>
					{this.footerBar(this.props.children)}
				</View>
			</View>
		)
	}





}
const styles = StyleSheet.create({

})