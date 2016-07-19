/**
 * Created by xiajw on 2016/7/19.
 */
import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    NativeModules,
} from 'react-native';

var InteractBetweenJSAndNative = React.createClass({
    getInitialState: function() {
        return {
            content: "JS Default"
        }
    },
    render: function() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{height: 100}} onPress={this._onPress}>
                    {this.state.content}
                </Text>
            </View>
        )
    },
    _onPress: function() {
        NativeModules.ExchangeStringModule.setString("This is from JS");
    },
    componentWillMount: function() {
        NativeModules.ExchangeStringModule.getString((string) => {
            this.setState({
                content: string
            });
        });
    }

});

AppRegistry.registerComponent("InteractBetweenJSAndNative", ()=>InteractBetweenJSAndNative);