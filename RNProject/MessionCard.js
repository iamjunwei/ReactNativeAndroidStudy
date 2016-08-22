/**
 * Created by xiajw on 2016/8/22.
 */
import React, {Component} from "react";
import {AppRegistry, View, Text} from "react-native";

export default class MessionCard extends Component {
    render() {
        return (
            <View>
                <View style={{marginLeft: 20, width: 5, height: 20, backgroundColor: '#ff7d13'}}/>
                <View style={{flex: 1, borderRadius: 4, backgroundColor: '#ff7d13', paddingBottom: 20}}>
                    <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                        <Text style={{color: '#333333', fontSize: 26, alignSelf: 'flex-end', flex: 1}}>可以在线选座了</Text>
                        <View style={{
                            width: 60,
                            height: 60,
                            marginRight: -10,
                            marginTop: -10,
                            borderRadius: 30,
                            backgroundColor: 'white',
                            alignItems: 'center',
                            justifyContent:'center',
                        }}>
                            <Text style={{color: '#333333', fontSize: 12}}>+2</Text>
                            <Text style={{color: '#333333', fontSize: 12}}>舒适度</Text>
                        </View>
                    </View>
                    <Text style={{color: '#333333', fontSize: 14, marginTop: 10}}>想靠近出口或欣赏风景？现在可以免费选座</Text>
                    <View style={{
                        alignSelf: 'flex-end', marginRight: 30, marginTop: 30, borderRadius: 4,
                        backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', padding: 5
                    }}>
                        <Text style={{color: '#333333', fontSize: 20}}>立即选座</Text>
                    </View>
                </View>
            </View>
        );
    }
}

AppRegistry.registerComponent("MessionCard", () => MessionCard);