import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Image,
	View,
} from 'react-native';

class ImageExample extends Component {
    render() {
        return (
            <View>
                <Image source={require("./Lighthouse.jpg")} style={styles.localImage} />
                <Image source={{uri: 'http://f.hiphotos.baidu.com/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=d9826a4a2a2eb938f86072a0b40bee50/d043ad4bd11373f00f670634a10f4bfbfaed04c4.jpg'}} style={styles.netImage} />
				<Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={{width: 200, height: 200}} />
            </View>
        );
    }
}

var styles = StyleSheet.create({
	localImage:{
		width: 160,
		height: 120,
	},
	netImage:{
		width: 160,
		height: 160,
	}
});

AppRegistry.registerComponent("ImageExample" , () => ImageExample);

module.exports = ImageExample;