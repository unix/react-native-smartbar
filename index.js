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
		this.state = {
			content: this.props.children
		}
		this.children = '2'
	}


	/**
	 *
	 * @param children {Array} children pages footer
	 */
	footerBar (children){
		return children.map((item, index) =>{
			return (
				<TouchableHighlight key={`tabbar-item${index}`}
				                    style={styles.footerButton}
				>
					<View>
						<Image source={item.props.icon}
						       style={styles.icon}
						/>
						<Text style={styles.text}>1</Text>
					</View>
				</TouchableHighlight>
			)
		})
	}

	render (){
		console.log(this.state.content);
		return (
			<View style={styles.body}>
				<View style={styles.content}>
					{this.state.content[0].props.children}
				</View>
				<View style={styles.footer}>
					{this.footerBar(this.props.children)}
				</View>
			</View>
		)
	}





}
const {width} = Dimensions.get('window')
const styles = StyleSheet.create({
	body: {
		flex: 1,
		width: width,
		overflow: 'hidden',
	},
	content: {
		flex: 1,
	},
	footer: {
		width: width,
		flexDirection: 'row',
		backgroundColor: '#fff'
	},
	footerButton: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: 5,
		paddingBottom: 5,
		borderTopWidth: 1,
		borderTopColor: '#E5E5E5'
	},
	icon: {
		width: 22,
		height: 22,
	},
	text: {
		fontSize: 14,
		color: '#9B9DB0'
	}
})