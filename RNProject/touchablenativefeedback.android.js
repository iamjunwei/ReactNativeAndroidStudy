/**
 * Created by xiajw on 2016/6/5.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    TouchableNativeFeedback,
    Text,
	NativeModules,
	View,
} from 'react-native';

class TouchableNativeFeedbackExample extends Component{
	_onPressButton() {
		NativeModules.ToastAndroid.show("toast", NativeModules.ToastAndroid.SHORT);
	}
    render() {
        return (
			<TouchableNativeFeedback
				onPress={this._onPressButton}
				background={TouchableNativeFeedback.SelectableBackground()}>
				
				<View style={{width: 150, height: 100, backgroundColor: 'red'}}>
					<Text style={{margin: 30}}>Button</Text>
				</View>
				
			</TouchableNativeFeedback>
		);
    }
}


AppRegistry.registerComponent("TouchableNativeFeedbackExample", () => TouchableNativeFeedbackExample);

module.exports = TouchableNativeFeedbackExample;