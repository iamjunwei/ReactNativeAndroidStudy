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

var MyButton = React.createClass({
	getInitialState() {
		return {
			myBackColor: "white",
			myBorderColor: "black",
			myTextColor: "black",
		};
	},
	_onPressIn() {
		if (this.props.isselect) {
			this.setState({
				myBackColor: "yellow",
				myBorderColor: "red",
				myTextColor: "red",
			});
		} else {
			this.setState({
				myBackColor: "black",
				myBorderColor: "white",
				myTextColor: "white",
			});
		}
	},
	_onPressOut() {
		if (this.props.isselect) {
			this.setState({
				myBackColor: "red",
				myBorderColor: "yellow",
				myTextColor: "yellow",
			});
		} else {
			this.setState({
				myBackColor: "white",
				myBorderColor: "black",
				myTextColor: "black",
			});
		}
	},
    render() {
        return (
			<TouchableOpacity
				style={[styles.mybutton, this.props.buttonStyle, {backgroundColor: this.state.myBackColor, borderColor: this.state.myBorderColor}]}
				onPress={this.props.onPressButton}
				activeOpacity={1}
				onPressIn={this._onPressIn}
				onPressOut={this._onPressOut} >
				<View style={this.props.textStyle}>
					<Text style={[styles.myText, {color: this.state.myTextColor}]}>
						{this.props.textContent}
					</Text>
				</View>
			</TouchableOpacity>
        );
    },
	componentDidMount() {
		this._onPressOut();
	}
});
	
var styles = StyleSheet.create({
    button: {
        width: 160,
        height: 120,
    },
	mybutton: {
		backgroundColor: 'white',
		borderColor: 'black',
		borderWidth: 1,
		borderRadius: 8,
	},
	myText: {
		color: 'black',
	},
});

AppRegistry.registerComponent("MyButton", () => MyButton);

module.exports = MyButton;