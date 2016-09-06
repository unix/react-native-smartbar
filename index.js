/**
 * Created by WittBulter on 16/9/5.
 */

import React, {Component} from 'react'
import {StyleSheet, View, Text, Image, TouchableHighlight, Dimensions, Animated, Easing} from 'react-native'
import Item from './item'

export default class Tabbar extends Component {

	static propTypes = {
		...View.propTypes,
		style: View.propTypes.style,
		activeColor: React.PropTypes.string,
	}
	static Item = Item
	// 构造
	constructor (props){
		super(props)
		// 初始状态
		this.state = {
			content: this.props.children,
			contentActive: this.props.index? this.props.index:0,
			textActive: this.props.activeColor? this.props.activeColor: '#FE985B',
			footerMarginBottom: new Animated.Value(0),
		}
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
					<View style={styles.box}>
						<Image source={active? selected: item.props.icon}
						       style={styles.icon}
						       {...item.props.iconStyle}
						/>
						<Text style={[styles.text, active&& {color: this.state.textActive}, {...item.props.textStyle}]}
						>
							{item.props.text}
						</Text>
					</View>
				</TouchableHighlight>
			)
		})
	}

	render (){
		return (
			<View style={styles.body}>
				<View style={styles.content}>
					{this.state.content[this.state.contentActive].props.children}
				</View>
				<Animated.View style={[styles.footer, {marginBottom: this.state.footerMarginBottom}]}
				      {...this.props.style}
				>
					{this.footerBar(this.props.children)}
				</Animated.View>
			</View>
		)
	}

	/**
	 *
	 * @param t [{bool}] footBar show&hide
	 */
	toggleBar (t = this.state.footerMarginBottom._value == 0){
		console.log(t);
		Animated.timing(
			this.state.footerMarginBottom,{
				toValue: t? -85: 0,
				duration: 190,
				easing: Easing.linear
			}
		).start()
	}

	/**
	 *
	 * @param index [{number}] screen index
	 */
	jumpToIndex (index){
		this.setState({
			contentActive: index
		})
	}


	componentWillReceiveProps(nextProps) {
		if (nextProps.index != undefined) this.jumpToIndex(nextProps.index)
		if (nextProps.toggleBar != undefined) this.toggleBar(!nextProps.toggleBar)
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
	box: {
		flex: 1,
		alignItems: 'center',
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
	},
})