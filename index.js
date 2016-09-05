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
			content: this.props.children,
			contentActive: 0
		}
		this.children = '2'
	}


	/**
	 *
	 * @param children {Array} children pages footer
	 */
	footerBar (children){
		/**
		 *
		 * @param done {function} item callback
		 * @param index {number} onpress index
		 */
		const pressHandle = (done, index) =>{
			this.setState({
				contentActive: index
			})
			done&& done()
		}
		return children.map((item, index) =>{
			const active = this.state.contentActive== index
			const selected = item.props.selectedIcon? item.props.selectedIcon: item.props.icon
			return (
				<TouchableHighlight key={`tabbar-item${index}`}
				                    style={styles.footerButton}
				                    onPress={() => pressHandle(item.props.onPress, index)}
				                    underlayColor={'transparent'}
				>
					<View>
						<Image source={active? selected: item.props.icon}
						       style={styles.icon}
						/>
						<Text style={styles.text}>我的</Text>
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
					{this.state.content[this.state.contentActive].props.children}
				</View>
				<View style={styles.footer}
				      {...this.props.style}
				>
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
		backgroundColor: '#fff',
		borderTopWidth: 1,
		borderTopColor: '#E5E5E5'
	},
	footerButton: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: 5,
		paddingBottom: 5,
	},
	icon: {
		width: 22,
		height: 22,
		alignItems: 'center',
	},
	text: {
		fontSize: 12,
		color: '#9B9DB0',
		paddingTop: 3,
		textAlign: 'center'
	}
})