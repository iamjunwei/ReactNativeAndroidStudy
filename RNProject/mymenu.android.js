import React from "react";
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    PixelRatio,
    TouchableOpacity,
    NativeModules,
} from "react-native";

var data = {
    "language": {
        "All": ["All"],
        "Web Front End": ["HTML", "CSS", "JavaScript"],
        "Server": ["Node", "PHP", "Ruby", "Python"]
    },
    "Tool": {
        "All": ["All"],
        "Java": ["Eclipse"],
        "Web": ["WebStorm"]
    }
};

var MyButton = require("./mybutton.android");

var Header = React.createClass({
   getInitialState: function() {
     return {
       select: "language"
     };
   },
   render: function() {
       var tabs = [];
       for (var i in this.props.data) {
           const j = i;
           tabs.push(
               <MyButton
                   activeOpacity={1}
                   onPressButton={function() {this.props.tabSelect(j)}.bind(this)}
                   style={[styles.flex1, styles.center, styles.height50]}
                   buttonStyle={[styles.flex1, styles.center, styles.height50]}
                   textStyle={[styles.height50, styles.center]}
                   textContent={i}
                   isselect={this.props.selectTab === i}>
               </MyButton>
           );
       }
       return (
            <View style={[styles.row, styles.height50]}>
                {tabs}
            </View>
       );
   }
});

var Left = React.createClass({
    getInitialState: function() {
        return {
            select: "All"
        };
    },
    render: function() {
        var tabs = [];
        for (var i in this.props.data) {
            const j = i;
            tabs.push(
                <MyButton
                    activeOpacity={1}
                    onPressButton={function() {this.props.subTabSelect(j)}.bind(this)}
                    style={[styles.center, styles.height50]}
                    buttonStyle={[styles.center, styles.height50]}
                    textStyle={[styles.height50, styles.center]}
                    textContent={i}
                    isselect={this.props.selectTab === i}>
                </MyButton>
            );
        }
        return (
            <View style={styles.flex1}>
                {tabs}
            </View>
        );
    }
});

var Right = React.createClass({
    getInitialState: function() {
        return {
            select: "All"
        };
    },
    render: function() {
        var tabs = [];
        for (var i in this.props.data) {
            const j = i;
            tabs.push(
                <MyButton
                    activeOpacity={1}
                    onPressButton={function() {this.props.contentSelect(j)}.bind(this)}
                    style={[styles.center, styles.height50]}
                    buttonStyle={[styles.center, styles.height50]}
                    textStyle={[styles.height50, styles.center]}
                    textContent={this.props.data[i]}
                    isselect={this.props.selectTab === this.props.data[i]}>
                </MyButton>
            );
        }
        return (
            <View style={styles.flex1}>
                {tabs}
            </View>
        );
    }
});

var MyMenu = React.createClass({
    getInitialState: function() {
        return {
            tabContent: "All",
            tabSubIndex: "All",
            tabIndex: "language",
        };
    },
    render: function() {
        return (
            <View style={styles.flex1}>
                <Header data={data} tabSelect={this._tabSelect} selectTab={this.state.tabIndex}/>
                <View style={[styles.row]}>
                    <Left style={styles.flex1} data={data[this.state.tabIndex]} selectTab={this.state.tabSubIndex} subTabSelect={this._tabSubSelect}/>
                    <Right style={styles.flex1} data={data[this.state.tabIndex][this.state.tabSubIndex]} selectTab={this.state.tabContent} contentSelect={this._contentSelect}/>
                </View>
            </View>
        );
    },
    _tabSelect: function(i) {
        var tabSubIndex;
        var tabContent;
        for (var tempSubIndex in data[i]) {
            for (var tempContent in data[i][tempSubIndex]) {
                tabSubIndex = tempSubIndex;
                tabContent = data[i][tempSubIndex][tempContent];
                break;
            }
            break;
        }
        this.setState({tabIndex: i, tabSubIndex: tabSubIndex, tabContent:tabContent});
    },
    _tabSubSelect: function(i) {
        var tabContent;
        for (var tempContent in data[this.state.tabIndex][i]) {
            tabContent = data[this.state.tabIndex][i][tempContent];
            break;
        }
        this.setState({tabSubIndex: i, tabContent:tabContent});
    },
    _contentSelect: function(i) {
        this.setState({tabContent:i});
    }
});

AppRegistry.registerComponent("MyMenu", () => MyMenu);

var styles = StyleSheet.create({
    row: {
        flexDirection: "row"
    },
    height50:{
        height: 50
    },
    flex1: {
        flex: 1
    },
    center: {
        justifyContent: "center",
        alignItems: "center"
    },
    tabSelect:{
        backgroundColor: "yellow"
    },
    tabUnSelect: {
        backgroundColor: "gray"
    },
    tabSubSelect:{
        backgroundColor: "blue"
    },
    contentSelect: {
        backgroundColor: "red"
    },
    flex2: {
        flex: 2
    },
    stretch: {
        alignItems: "stretch",
    }
});