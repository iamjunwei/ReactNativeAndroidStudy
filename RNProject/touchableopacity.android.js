/**
 * Created by xiajw on 2016/6/5.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    TouchableOpacity,
    Image,
	NativeModules,
	View,
	Text,
} from 'react-native';

var TouchableOpacityView = React.createClass({
	getInitialState() {
		return {
			myBackColor: "white",
			myBorderColor: "black",
			myTextColor: "black",
		};
	},
	_onPressButton() {
		NativeModules.ToastAndroid.show("click", NativeModules.ToastAndroid.SHORT);
	},
	_onPressIn() {
		this.setState({
			myBackColor: "black",
			myBorderColor: "red",
			myTextColor: "white",
		});
	},
	_onPressOut() {
		this.setState({
			myBackColor: "white",
			myBorderColor: "black",
			myTextColor: "black",
		});
	},
    render() {
        return (
			<View>
				<TouchableOpacity style={styles.button} onPress={this._onPressButton} activeOpacity={0.3} >
					<Image
						style={styles.button}
						source={require('./Lighthouse.jpg')}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.mybutton, {backgroundColor: this.state.myBackColor, borderColor: this.state.myBorderColor}]} 
					onPress={this._onPressButton} 
					activeOpacity={1} 
					onPressIn={this._onPressIn}
					onPressOut={this._onPressOut} >
					<View>
						<Text style={[styles.myText, {color: this.state.myTextColor}]}>
						button
						</Text>
					</View>
				</TouchableOpacity>
			</View>
        );
    },
});
	
var styles = StyleSheet.create({
    button: {
        width: 160,
        height: 120,
    },
	mybutton: {
		marginTop: 30,
		marginLeft: 30,
		width: 200,
		height: 100,
		backgroundColor: 'white',
		borderColor: 'black',
		borderWidth: 1,
		borderRadius: 8,
	},
	myText: {
		marginLeft: 80,
		marginTop: 40,
		color: 'black',
	},
});

AppRegistry.registerComponent("TouchableOpacityView", () => TouchableOpacityView);

module.exports = TouchableOpacityView;