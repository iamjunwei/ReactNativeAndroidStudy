/**
 * Sample Ctrip React Native App
 * http://crn.site.ctripcorp.com/
 * @flow
 */

'use strict';

import React, { Component } from 'react';

import {
	AppRegistry
} from 'react-native';

import {
	App
} from '@ctrip/crn';

import page1 from './src/Page1.js';
import page2 from './src/Page2.js';

const pages = [
	{
	    component:page1,
	    name:'page1',
	    isInitialPage:true
	},
	{
	    component:page2,
	    name:'page2',
	}
];

//全局导航栏配置
const navigationBarConfig = {
	hide:false, // 默认为 false
	backgroundColor:'rgb(9, 159, 222)', // 导航栏背景色,默认为携程标准蓝 rgb(9, 159, 222)
};

class flight_assistant extends App {
	constructor(props) {
		super(props);
		this.init({pages, navigationBarConfig});// navigationBarConfig 可不传
	}
}

AppRegistry.registerComponent('flight_assistant', () => flight_assistant);