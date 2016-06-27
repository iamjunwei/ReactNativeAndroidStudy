import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

var Page1 = React.createClass({
    render: function() {
        return (
            <Text style={styles.flex1}>Page1</Text>
        );
    },
});

var Page2 = React.createClass({
    render: function() {
        return (
            <Text style={styles.flex1}>Page2</Text>
        );
    },
});

var Page3 = React.createClass({
    render: function() {
        return (
            <Text style={styles.flex1}>Page3</Text>
        );
    },
});

var TabHost = React.createClass({
    getInitialState: function() {
        return {
            selectTab: 0,
        };
    },
    render: function() {
        var containerView;
        if (this.state.selectTab === 0) {
            containerView = (<Page1/>);
        } else if (this.state.selectTab === 1) {
            containerView = (<Page2/>);
        } else {
            containerView = (<Page3/>);
        }
        return (
            <View style={styles.flex1}>
                {containerView}
                <View style={[styles.height50, styles.row]}>
                    <TouchableOpacity style={[styles.height50, styles.flex1, styles.center]} onPress={function() {this._onTabSelect(0)}.bind(this)}>
                        <Text>Page1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.height50, styles.flex1, styles.center]} onPress={function() {this._onTabSelect(1)}.bind(this)}>
                        <Text>Page2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.height50, styles.flex1, styles.center]} onPress={function() {this._onTabSelect(2)}.bind(this)}>
                        <Text>Page3</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    },
    _onTabSelect: function(tab) {
        this.setState({selectTab: tab});
    },
});

var styles = StyleSheet.create({
    flex1:{
        flex: 1,
    },
    row: {
        flexDirection: "row",
    },
    height50: {
        height: 50,
    },
    center: {
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        textAlign: "center",
    },

});

AppRegistry.registerComponent("TabHost", () => TabHost);

module.exports = TabHost;