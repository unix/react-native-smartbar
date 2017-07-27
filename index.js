/**
 * Created by WittBulter on 16/9/5.
 */

import React, { Component } from 'react'
import { Animated, Dimensions, Easing, Image, Platform, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import Item from './item'

export default class Tabbar extends Component {
  
  static propTypes = {
    ...View.propTypes,
    style: View.propTypes.style,
    activeColor: React.PropTypes.string,
    height: React.PropTypes.number,
  }
  static Item = Item
  
  constructor(props) {
    super(props)
    this.state = {
      content: this.props.children,
      contentActive: this.props.index || 0,
      contentHeight: this.props.height || 45,
      textActive: this.props.activeColor ? this.props.activeColor : '#fe985b',
      footerMarginBottom: new Animated.Value(0),
    }
  }
  
  /**
   *
   * @param children {Array} children pages footer
   */
  footerBar(children) {
    /**
     *
     * @param done {function} item callback
     * @param index {number} onpress index
     */
    const pressHandle = (done, index) => {
      this.setState({ contentActive: index })
      done && done()
    }
    const textBox = () => {}
    
    return children.map((item, index) => {
      const active = this.state.contentActive === index
      const selected = item.props.selectedIcon || item.props.icon
      const box = (text, icon) => {
        if (!text) {
          return (
            <View style={styles.box}>
              <Image source={active ? selected : item.props.icon}
                style={styles.onlyIcon}
                {...item.props.iconStyle}/>
            </View>
          )
        }
        if (!icon) {
          return (
            <View style={styles.box}>
              <Text style={[styles.onlyText, active && { color: this.state.textActive }, { ...item.props.textStyle }]}>
                {text}
              </Text>
            </View>
          )
        }
        return (
          <View style={styles.box}>
            <Image source={icon} style={styles.icon} {...item.props.iconStyle}/>
            <Text style={[styles.text, active && { color: this.state.textActive }, { ...item.props.textStyle }]}>
              {text}
            </Text>
          </View>
        )
      }
      return (
        <TouchableHighlight key={`tabbar-item${index}`} style={styles.footerButton}
          onPress={() => pressHandle(item.props.onPress, index)}
          underlayColor={'transparent'}>
          {box(item.props.text, active ? selected : item.props.icon)}
        </TouchableHighlight>
      )
    })
  }
  
  render() {
    return (
      <View style={styles.body}>
        <View style={styles.content}>
          {this.state.content[this.state.contentActive].props.children}
        </View>
        <Animated.View
          style={[styles.footer, { marginBottom: this.state.footerMarginBottom }, { height: this.state.contentHeight }]}
          {...this.props.style}>
          {this.footerBar(this.props.children)}
        </Animated.View>
      </View>
    )
  }
  
  /**
   *
   * @param t [{bool}] footBar show&hide
   */
  toggleBar(t = (this.state.footerMarginBottom._value === 0 )) {
    Animated.timing(
      this.state.footerMarginBottom, {
        toValue: t ? -85 : 0,
        duration: 190,
        easing: Easing.linear,
      },
    ).start()
  }
  
  /**
   *
   * @param index [{number}] screen index
   */
  jumpToIndex(index) {
    this.setState({ contentActive: index })
  }
  
  
  componentWillReceiveProps(nextProps) {
    nextProps.index !== undefined && this.jumpToIndex(nextProps.index)
    nextProps.toggleBar !== undefined && this.toggleBar(!nextProps.toggleBar)
  }
  
}
const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
  body: {
    flexGrow: 1,
    width: width,
    overflow: 'hidden',
    height: height,
    flexDirection: 'column',
  },
  content: {
    flex: 1,
  },
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    width: width,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
  },
  footerButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 5,
    paddingBottom: 5,
  },
  icon: {
    width: Platform.OS === 'ios' ? 22 : 18,
    height: Platform.OS === 'ios' ? 22 : 18,
    alignItems: 'center',
  },
  onlyIcon: {
    width: 27,
    height: 27,
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
    color: '#9b9db0',
    paddingTop: 3,
    textAlign: 'center',
  },
  onlyText: {
    fontSize: 16,
    color: '#9b9db0',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    marginBottom: 8,
  },
})
