/**
 * Created by xiajw on 2016/6/5.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    TouchableHighlight,
    Image,
	NativeModules,
	View,
} from 'react-native';

var MyImage = React.createClass({
	render: function() {
		return (
			<Image
				ref="myImage"
				style={styles.button}
				source={require('./Lighthouse.jpg')}
				onPress={this._onPressButton}>
			</Image>
		);
	},
});

class TouchableHighlightView extends Component{
	_onPressButton() {
		NativeModules.ToastAndroid.show("toast", NativeModules.ToastAndroid.SHORT);
	}
    render() {
		var myImage = React.createElement(MyImage, null);
        return (
			<View>
				<TouchableHighlight style={styles.button} onPress={this._onPressButton} underlayColor="#00000000" activeOpacity={0.7} >
					<Image
						style={styles.button}
						source={require('./Lighthouse.jpg')}
					/>
				</TouchableHighlight>
				{myImage}
			</View>
        );
    }
}

var styles = StyleSheet.create({
    button: {
        width: 160,
        height: 120,
    }
});

AppRegistry.registerComponent("TouchableHighlightExample", () => TouchableHighlightView);

module.exports = TouchableHighlightView;