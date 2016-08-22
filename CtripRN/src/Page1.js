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
	View,
} from 'react-native';

import {
	Page,
	Button,
	ViewPort
} from '@ctrip/crn';

export default class Page1 extends Page {
	render() {
		return (
			<ViewPort>
					<View style={styles.container}>
						<Text style={styles.welcome}>
							Welcome to MyPage1
						</Text>
						<Text style={styles.instructions}>
							Shake or press menu button for dev menu
						</Text>
						<Button
						onPress = {() => {this.push('page2', {'foo':'bar'});}}
						style={styles.button}>
						Go to Page2
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
	button: {
	}
});