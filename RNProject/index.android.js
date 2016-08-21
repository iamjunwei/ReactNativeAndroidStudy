var ListExample = require("./list.android");
var MovieView = require("./movie.android");
var ImageExample = require("./image.android");
var DrawerLayoutExample = require("./drawerlayout.android");
var TouchableHighlightView = require("./touchablehighlight.android");
var TouchableNativeFeedbackExample = require("./touchablenativefeedback.android");
var TouchableOpacityView = require("./touchableopacity.android");
require("./mymenu.android");
require("./tabhost.android");
require("./layoutview.android");
require("./interact.android");
require("./flightInquire");
require("./fetchdata");

import React, {Component} from 'react';

import {
	AppRegistry,
	View,
	Text,
	ViewPagerAndroid,
	StyleSheet,
} from 'react-native';

var ViewPagerExampleView = React.createClass({
	render() {
		return (
			<ViewPagerAndroid
				initialPage={0}
				style={styles.viewPager} >
				<View style={styles.pageStyle}>
					<MovieView />
				</View>
				<View style={styles.pageStyle}>
					<ImageExample />
				</View>
				<View style={styles.pageStyle}>
					<DrawerLayoutExample />
				</View>
				<View style={styles.pageStyle}>
					<ListExample />
				</View>
				<View style={styles.pageStyle}>
					<TouchableHighlightView />
				</View>
				<View style={styles.pageStyle}>
					<TouchableNativeFeedbackExample />
				</View>
				<View style={styles.pageStyle}>
					<TouchableOpacityView />
				</View>
			</ViewPagerAndroid>
		);
	}
});

var styles = StyleSheet.create({
	viewPager: {
		flex: 1,
	},
	pageStyle: {
		
	},
});

AppRegistry.registerComponent("ViewPagerExample", () => ViewPagerExampleView);