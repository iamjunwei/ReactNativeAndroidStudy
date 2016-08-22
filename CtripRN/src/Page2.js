/**
 * Sample Ctrip React Native App
 * http://crn.site.ctripcorp.com/
 * @flow
 */

'use strict';

import React, { Component } from 'react';

import {
	StyleSheet,
	Text,
	View
} from 'react-native';

import {
	Page,
	ViewPort,
	Button
} from '@ctrip/crn';

export default class Page2 extends Page {
	render() {
		return (
			<ViewPort>
			<View style={styles.container}>
				<Text style={styles.welcome}>
					Welcome to Ctrip React Native!
				</Text>
				<Text style={styles.instructions}>
					Shake or press menu button for dev menu
				</Text>
				<Button
					onPress = {() => {this.pop();}}
					style={styles.button}>
					Back to Page1
				</Button>
			</View>
			</ViewPort>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});