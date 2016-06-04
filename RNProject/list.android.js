import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
	ListView,
	View,
	NativeModules,
	Dimensions,
} from 'react-native';

var data = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];

var ListExample = React.createClass({
    getInitialState: function() {
		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		return {
			dataSource: ds.cloneWithRows(data),
		};
	},
	
	count: 0,

	render: function() {
		var windowSetting = Dimensions.get('window');
		return (
			<View style={{flexDirection: 'column', position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}} >
				<ListView
					dataSource={this.state.dataSource}
					renderRow={(rowData) => <Text style={styles.item} onPress={() => {this.count++; this.showToast("")}}>{rowData}</Text>}
					onEndReached={this.showToast("Reach End")}
					initialListSize={3}
					renderSeparator={(sectionID, rowID, adjacentRowHighlighted) => <View key={rowID} style={styles.divider}/> }
				/>
			</View>
		);
	},
	
	showToast: function(msg) {
		NativeModules.ToastAndroid.show(msg + this.count, NativeModules.ToastAndroid.SHORT);
	},
});

var styles = StyleSheet.create({
	item: {
		height: 80,
		textAlign: 'center',
	},
	divider: {
		height: 1,
		backgroundColor: 'black',
	},
});

AppRegistry.registerComponent('ListExample', () => ListExample);
