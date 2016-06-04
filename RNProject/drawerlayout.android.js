import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Image,
    View,
    DrawerLayoutAndroid,
    Text,
    NativeModules,
} from 'react-native';

class DrawerLayoutExample extends Component{
    isOpen = false;
    renderDrawer() {
        var navigationView = this.renderNavigation();
        return (
            <DrawerLayoutAndroid
                ref="myDrawer"
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => navigationView}>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
                    <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
                </View>
            </DrawerLayoutAndroid>
        );
    }
    renderNavigation() {
        return (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}} >
                    I'm in the Drawer!
                </Text>
            </View>
        );
    }
    render() {
        return this.renderDrawer();
    }
    close() {
        this.refs.myDrawer.closeDrawer();
    }
    open() {
        this.refs.myDrawer.openDrawer();
    }
    componentDidMount() {
        setInterval(function() {
            if (this.isOpen) {
                this.close();
            } else {
                this.open();
            }
            this.isOpen = !this.isOpen;
        }.bind(this), 2000);
    }
}

AppRegistry.registerComponent("DrawerLayoutExample", () => DrawerLayoutExample);
