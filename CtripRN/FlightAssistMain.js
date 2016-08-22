/**
 * Created by xiajw on 16/8/19.
 */
import React from "react";
import {AppRegistry} from "react-native";
import {App} from "@ctrip/crn";
import FlightAssistant from "../flight_assistant/src/page/FlightAssistant";

const pages = [
    {
        component: FlightAssistant,
        name: 'FlightAssistant',
        isInitialPage: true
    }
];

//全局导航栏配置
const navigationBarConfig = {
    hide: true, // 默认为 false
    backgroundColor: 'rgb(9, 159, 222)', // 导航栏背景色,默认为携程标准蓝 rgb(9, 159, 222)
};

class FlightAssistantApp extends App {
    constructor(props) {
        super(props);
        this.init({pages, navigationBarConfig});// navigationBarConfig 可不传
    }
}

AppRegistry.registerComponent('flight_assistant', () => FlightAssistantApp);