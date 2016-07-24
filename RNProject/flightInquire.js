import React, {Component} from 'react';

import {
    AppRegistry,
    ScrollView,
    Dimensions,
    Image,
    StyleSheet,
    Text,
    View,
    PixelRatio,
    TouchableOpacity,
    Animated,
    NativeModules,
    Easing,
} from 'react-native';

class DoubleClick {
    constructor() {
        this.time = -1;
    }
    static fastClick() {
        if (this.time < 0 ) {
            this.time = new Date().getTime();
            return false;
        } else {
            let newTime = new Date().getTime();
            if (newTime - this.time < 300) {
                return true;
            } else {
                this.time = newTime; 
                return false;
            }
        }
    } 
}

export default class FlightInquire extends Component {
    constructor(props) {
        super(props);
        var {height, width} = Dimensions.get('window');
        var halfWidth = (width - 20) / 2;
        this.state = {
            tripType: 1,
            animated: new Animated.Value(0),
            animated1: new Animated.Value(-halfWidth),
            animatedDepartCity: new Animated.Value(0),
            animatedArriveCity: new Animated.Value(0),
            animatedRotation: new Animated.Value(0),
        }
        this.departCityWidth = 0;
        this.arriveCityWidth = 0;
        this.isDuringChangeTripType = false;
        this.isDuringChangeCity = false;
    }
    _onTripTypeSelect(selectTripType) {
        if (DoubleClick.fastClick()) {
            return;
        }
        if (this.isDuringChangeTripType) {
            return;
        }
        if (this.state.tripType == selectTripType) {
            return;
        }
        this.isDuringChangeTripType = true;
        var {height, width} = Dimensions.get('window');
        var oneThreeWidth = (width - 20) / 3;
        var currentValue = this.state.animated.__getValue();
        var nextValue;
        if (currentValue == 0) {
            nextValue = oneThreeWidth;
        } else {
            nextValue = 0;
        }

        var halfWidth = (width - 20) / 2;
        var currentValue1 = this.state.animated1.__getValue();
        var nextValue1;
        if (currentValue1 != 0) {
            nextValue1 = 0;
        } else {
            nextValue1 = -halfWidth;
        }
        Animated.parallel([
            Animated.timing(this.state.animated, {
                toValue: nextValue,
            }),
            Animated.timing(this.state.animated1, {
                toValue: nextValue1,
            }),
        ]).start(() => this.isDuringChangeTripType = false);
        this.setState({
            tripType: selectTripType
        });
    }
    _renderTopTabBackground() {
        var {height, width} = Dimensions.get('window');
        var oneThreeWidth = { width: (width - 20) / 3 };
        var firstTabBackground = "#00000000";
        var secondTabBackground = "#00000000";
        var thirdTabBackground = "#00000000";
        return (
            <View style={styles.topTabContainer}>
                <View
                    style={[oneThreeWidth, { height: 53, backgroundColor: firstTabBackground }]}/>
                <View
                    style={[oneThreeWidth, { height: 53, backgroundColor: secondTabBackground }]}/>
                <View
                    style={[oneThreeWidth, { height: 53, backgroundColor: thirdTabBackground }]}/>
            </View>
        );
    }
    _renderAnimatedTab() {
        var {height, width} = Dimensions.get('window');
        var oneThreeWidth = { width: (width - 20) / 3 };
        var firstTabBackground = "#00000000";
        var secondTabBackground = "#00000000";
        var thirdTabBackground = "#00000000";
        return (
            <View style={styles.topTabContainer}>
                <Animated.View
                    style={[{ flex: 1, height: 53, backgroundColor: 'white', left: this.state.animated }]}/>
                <Animated.View
                    style={[{ flex: 1, height: 53, backgroundColor: '#00000000' }]}/>
                <Animated.View
                    style={[{ flex: 1, height: 53, backgroundColor: '#00000000' }]}/>
            </View>
        );
    }
    _renderTopTabText() {
        var {height, width} = Dimensions.get('window');
        var oneThreeWidth = { width: (width - 20) / 3 };
        var firstTabStyle = styles.tabTextSelect;
        var secondTabStyle = styles.tabTextUnSelect;
        var thirdTabStyle = styles.tabTextUnSelect;
        if (this.state.tripType == 2) {
            firstTabStyle = styles.tabTextUnSelect;
            secondTabStyle = styles.tabTextSelect;
            thirdTabStyle = styles.tabTextUnSelect;
        } else {
            firstTabStyle = styles.tabTextSelect;
            secondTabStyle = styles.tabTextUnSelect;
            thirdTabStyle = styles.tabTextUnSelect;
        }
        return (
            <View style={[styles.topTabContainer]}>
                <TouchableOpacity activeOpacity={1} onPress={() => this._onTripTypeSelect(1) } style={{ height: 53, flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={[oneThreeWidth, firstTabStyle]} >单程</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={() => this._onTripTypeSelect(2) } style={{ height: 53, flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={[oneThreeWidth, secondTabStyle]}>往返</Text>
                </TouchableOpacity>
                <Text style={[oneThreeWidth, thirdTabStyle]}>多程</Text>
            </View>
        );
    }
    _renderReturnDate() {
        return (
            <View style={[styles.bottomDivider, styles.flex1, { marginLeft: 4 }]}>
                <Animated.View style={[styles.flex1, { right: this.state.animated1 }]}>
                    <Text style={[styles.arriveDate]}>2月16日</Text>
                </Animated.View>
            </View>
        );
    }
    _switchCity() {
        if (DoubleClick.fastClick()) {
            return;
        }
        if (this.isDuringChangeCity) {
            return;
        }
        this.isDuringChangeCity = true;
        var {height, width} = Dimensions.get('window');
        var departDistance = (width - 44) - this.departCityWidth;
        var arriveDistance = (width - 44) - this.arriveCityWidth;
        var currentValue = this.state.animatedDepartCity.__getValue();
        var nextValue;
        var nextValue1;
        this.state.animatedRotation.setValue(0);
        if (currentValue == 0) {
            nextValue = departDistance;
            nextValue1 = arriveDistance;
        } else {
            nextValue = 0;
            nextValue1 = 0;
        }
        Animated.parallel([
            Animated.timing(this.state.animatedDepartCity, {
                toValue: nextValue,
            }),
            Animated.timing(this.state.animatedArriveCity, {
                toValue: nextValue1,
            }),
            Animated.timing(this.state.animatedRotation, {
                toValue: 1,
            }),
        ]).start(() => this.isDuringChangeCity = false);
    }
    _renderDepartCity() {
        var {height, width} = Dimensions.get('window');
        return (
            <Animated.View style={[{ marginLeft: this.state.animatedDepartCity }]}>
                <Text style={styles.departCity} onLayout={(e) => { this.departCityWidth = e.nativeEvent.layout.width } }>上海</Text>
            </Animated.View>
        );
    }
    _renderArriveCity() {
        var {height, width} = Dimensions.get('window');
        return (
            <Animated.View style={[{ marginRight: this.state.animatedArriveCity }]}>
                <Text style={styles.arriveCity} onLayout={(e) => { this.arriveCityWidth = e.nativeEvent.layout.width } }>北京</Text>
            </Animated.View>
        );
    }
    render() {
        var {height, width} = Dimensions.get('window');
        var picWidth = width;
        var picHeight = picWidth * 349 / 720;
        var oneThreeWidth = { width: (width - 20) / 3 };
        return (
            <View style={{ flex: 1, backgroundColor: '#efeff4' }}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.topImage}>
                        <Image
                            source={require("./flightInquire/flight_banner_oversea.jpg") }
                            style={{ width: picWidth, height: picHeight }} />
                        <View style={styles.topImageMask} />
                        {this._renderTopTabBackground.apply(this) }
                        {this._renderAnimatedTab.apply(this) }
                        {this._renderTopTabText.apply(this) }
                    </View>
                    <View style={[styles.mainContainer, styles.mainBottomCorner]}>
                        <View style={{ position: 'absolute', top: 0, left: 0, height: 60 }}>
                            {this._renderDepartCity.apply(this) }
                        </View>
                        <View style={{ position: 'absolute', top: 0, right: 0, height: 60 }}>
                            {this._renderArriveCity.apply(this) }
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'flex-end', marginLeft: 17, marginRight: 17 }}>
                            <View style={[styles.bottomDivider, styles.flex1, { marginRight: 4, height: 60 }]}>
                            </View>
                            <TouchableOpacity style={{ width: 46, height: 46 }} activeOpacity={1} onPress={() => { this._switchCity.apply(this) } }>
                                <Image
                                    source={require("./flightInquire/flight_icon_home_city_switch_pressed.png") }
                                    style={{ position: 'absolute', width: 46, height: 46 }}/>
                                <Animated.View style={{
                                    height: 46, width: 46, transform: [{
                                        rotateZ: this.state.animatedRotation.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: ['0deg', '360deg']
                                        })
                                    }]
                                }}>
                                    <Image
                                        source={require("./flightInquire/flight_icon_home_city_switch_circle.png") }
                                        style={{
                                            position: 'absolute', width: 46, height: 46,

                                        }}/>
                                </Animated.View>
                            </TouchableOpacity>
                            <View style={[styles.bottomDivider, styles.flex1, { marginLeft: 4, height: 60 }]}>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'flex-end', marginLeft: 17, marginRight: 17 }}>
                            <View style={[styles.bottomDivider, styles.flex1, { marginRight: 4 }]}>
                                <Text style={styles.departDate}>
                                    2月14日
                                    <Text style={styles.subText}>
                                        &nbsp; 情人节
                                    </Text>
                                </Text>
                            </View>
                            {this._renderReturnDate.apply(this) }
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'flex-end', marginLeft: 17, marginRight: 17 }}>
                            <View style={[styles.bottomDivider, styles.flex1, { marginRight: 4 }]}>
                                <Text style={styles.selectClass}>经济舱</Text>
                            </View>
                            <View style={[styles.bottomDivider, styles.flex1, { marginLeft: 4 }]}>
                                <Text style={styles.selectChild}>
                                    1
                                    <Text style={styles.subText}>
                                        &nbsp; 成人&nbsp;
                                    </Text>
                                    1
                                    <Text style={styles.subText}>
                                        &nbsp; 儿童
                                    </Text>
                                </Text>
                            </View>
                        </View>
                        <View style={styles.inquireButton}>
                            <Text style={styles.inquireButtonText}>搜&nbsp; 索</Text>
                        </View>
                        <View style={[{ height: 28 }, styles.mainBottomCorner]}/>
                    </View>
                    <View style={{ marginTop: 24, height: 22, alignItems: 'center' }}>
                        <Image
                            source={require('./flightInquire/flight_pic_home_service.png') }
                            style={{ height: 22, width: 166 }}/>
                        <View style={{ marginTop: 15, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 14, color: '#999999' }}>
                                欢迎回来，李雷
                            </Text>
                            <Image
                                source={require("./flightInquire/flight_icon_homepage_diamond.png") }
                                style={{ width: 36, height: 13, marginLeft: 5 }}/>
                        </View>
                    </View>
                    <View style={{ height: 200 }}>
                    </View>
                </ScrollView>
                <View style={styles.bottomTabContainer}>
                    <View style={styles.bottomTab}>
                        <Image
                            source={require("./flightInquire/flight_icon_homepage_dynamic.png") }
                            style={styles.bottomTabIcon}/>
                        <Text style={styles.bottomTabText}>航班动态</Text>
                    </View>
                    <View style={styles.bottomTab}>
                        <Image
                            source={require("./flightInquire/flight_icon_homepage_check_in.png") }
                            style={styles.bottomTabIcon}/>
                        <Text style={styles.bottomTabText}>值机</Text>
                    </View>
                    <View style={styles.bottomTab}>
                        <Image
                            source={require("./flightInquire/flight_icon_homepage_low_price.png") }
                            style={styles.bottomTabIcon}/>
                        <Text style={styles.bottomTabText}>低价</Text>
                    </View>
                    <View style={styles.bottomTab}>
                        <Image
                            source={require("./flightInquire/flight_icon_homepage_assistant.png") }
                            style={styles.bottomTabIcon}/>
                        <Text style={styles.bottomTabText}>乘机助手</Text>
                    </View>
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    scrollView: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#efeff4',
    },
    topImage: {
        position: 'relative',
        top: 0,
        left: 0,
    },
    topImageMask: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        height: 48,
        marginLeft: 5,
        marginRight: 5,
    },
    topTabContainer: {
        position: 'absolute',
        bottom: 0,
        height: 53,
        left: 10,
        right: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    tabTextSelect: {
        flex: 1,
        fontSize: 19,
        color: '#4e5f71',
        textAlign: 'center',
    },
    tabTextUnSelect: {
        flex: 1,
        fontSize: 17,
        color: '#ffffff',
        textAlign: 'center',
    },
    mainContainer: {
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: 'white',
    },
    mainBottomCorner: {
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
    },
    bottomDivider: {
        borderBottomColor: '#e4e4e9',
        borderBottomWidth: 1,
    },
    flex1: {
        flex: 1,
    },
    departCity: {
        marginLeft: 17,
        height: 37,
        marginTop: 23,
        fontSize: 22,
        color: '#333333',
    },
    arriveCity: {
        marginRight: 17,
        height: 37,
        marginTop: 23,
        textAlign: 'right',
        fontSize: 22,
        color: '#333333',
    },
    departDate: {
        flex: 1,
        height: 37,
        marginTop: 23,
        borderBottomColor: '#e4e4e9',
        borderBottomWidth: 1,
        fontSize: 22,
        color: '#333333',
    },
    arriveDate: {
        flex: 1,
        height: 37,
        marginTop: 23,
        textAlign: 'right',
        fontSize: 22,
        color: '#333333',
    },
    nonArriveDate: {
        flex: 1,
        height: 26,
        marginTop: 34,
        textAlign: 'right',
        fontSize: 11,
        color: '#aaaaaa',
    },
    subText: {
        fontSize: 12,
        color: '#333333',
    },
    selectClass: {
        flex: 1,
        height: 37,
        marginTop: 23,
        borderBottomColor: '#e4e4e9',
        borderBottomWidth: 1,
        fontSize: 22,
        color: '#333333',
    },
    selectChild: {
        flex: 1,
        height: 37,
        marginTop: 23,
        textAlign: 'right',
        fontSize: 22,
        color: '#333333',
    },
    inquireButton: {
        marginTop: 28,
        marginLeft: 17,
        marginRight: 17,
        height: 48,
        backgroundColor: 'rgb(255, 154, 20)',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inquireButtonText: {
        fontSize: 22,
        color: 'white',
    },
    bottomTabContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 80,
        backgroundColor: 'white',
    },
    bottomTab: {
        flex: 1,
        alignItems: 'center',
    },
    bottomTabIcon: {
        marginTop: 10,
        width: 40,
        height: 40,
    },
    bottomTabText: {
        marginTop: 6,
        fontSize: 12,
        color: '#333333',
    },
});

AppRegistry.registerComponent("FlightInquire", () => FlightInquire);