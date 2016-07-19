import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    ListView,
    View,
    NativeModules,
    Dimensions,
} from 'react-native';

var MoveDown = React.createClass({
    getInitialState: function() {
        return {
            top: 200
        }
    },
    render: function() {
        return (
            <View style={{flex: 1}}>
                <View style={{height: 50, top: this.state.top, backgroundColor: 'red'}}/>
                <Text
                    style={{height: 50}}
                    onPress={function() {
                        setInterval(function() {
                            var current = this.state.top + 1;
                            this.setState({top: current});
                        }.bind(this), 100)}.bind(this)
                    }
                >
                    Press Me
                </Text>
            </View>
        );
    }
});

var data = [["a", "a1", "a2", "a3", "a4", "a5"], ["b", "b1", "b2", "b3", "b4", "b5"], ["c", "c1", "c2", "c3", "c4", "c5"], ["d", "d1", "d2", "d3", "d4", "d5"], ["e", "e1", "e2", "e3", "e4", "e5"], ["f", "f1", "f2", "f3", "f4", "f5"], ["g", "g1", "g2", "g3", "g4", "g5"], ["h", "h1", "h2", "h3", "h4", "h5"]];

var PinnedListView = React.createClass({
    pinnedPosition: {},
    pinHeight: 50,
    yy: 0,
    lastY: 0,
    getInitialState: function() {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2, sectionHeaderHasChanged: (prevSectionData, nextSectionData) => prevSectionData !== nextSectionData});
        return {
            dataSource: ds.cloneWithRowsAndSections(data, null, null),
            pinTop: 0,
            pinSectionID: 0,
        };
    },
    render: function() {
        return (
            <View style={{flexDirection: 'column', position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}} ref="container">
                <ListView
                    ref="ListView"
                    style={{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}}
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                    renderSeparator={(sectionID, rowID, adjacentRowHighlighted) => <View key={sectionID + " " + rowID} style={styles.divider}/> }
                    renderSectionHeader={(sectionData, sectionID) => <View style={styles.divider} />}
                    scrollEnabled={true}
                    onScroll={this._onScroll}

                    sendMomentumEvents={true}
                    onMomentumScrollBegin={(event) => {NativeModules.ToastAndroid.show("fling start", NativeModules.ToastAndroid.SHORT);}}
                    onMomentumScrollEnd={(event) => {NativeModules.ToastAndroid.show("fling end", NativeModules.ToastAndroid.SHORT);}}
                />
                <View style={{top: this.state.pinTop}} >
                    {this._renderPinnedHeader(this.state.pinSectionID, 0)}
                </View>
            </View>
        );
    },
    _renderPinnedHeader(sectionID, rowID) {
        return this._renderRow(this.state.dataSource.getRowData(sectionID, rowID), sectionID, rowID, null)
    },
    _renderRow(rowData, sectionID, rowID, highlightRow) {
        if (rowID == 0) {
            var header = (
                <View style={styles.pinHeader} onLayout={(e) => {this._savePinnedPosition(e, sectionID)}} >
                    <Text style={styles.text}>{rowData}</Text>
                </View>
            );
            return header;
        } else {
            return (
                <View style={styles.item}>
                    <Text style={styles.text}>{rowData}</Text>
                </View>
            );
        };
    },
    _savePinnedPosition(e, sectionID) {
        var {x, y, width, height} = e.nativeEvent.layout;
        if (!this.pinnedPosition.hasOwnProperty(sectionID + "")) {
            this.pinnedPosition["" + sectionID]  = y;
        }
    },
    _onScroll(e) {
        var offsetY = e.nativeEvent.contentOffset.y;
        var currentSec = 0;
        var above = 0;
        for (var sectionID in this.pinnedPosition) {
            var pinnedY = this.pinnedPosition[sectionID];
            if (offsetY < pinnedY) {
                if (pinnedY - offsetY < this.pinHeight) {
                    above = pinnedY - offsetY - this.pinHeight;
                }
                break;
            } else {
                currentSec = parseInt(sectionID);
            }
        }
        this.setState({
            pinSectionID: currentSec,
            pinTop: above
        });
    }
});

var styles = StyleSheet.create({
    pinHeader: {
        height: 50,
        justifyContent: "center",
        backgroundColor: 'red',
    },
    item: {
        height: 50,
        justifyContent: "center",
    },
    text: {
        textAlign: "center",
        fontSize: 20,
    },
    divider: {
        height: 1,
        backgroundColor: 'black',
    },
});

AppRegistry.registerComponent("MoveDown", ()=>PinnedListView);