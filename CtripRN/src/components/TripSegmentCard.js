/**
 * Created by xiajw on 16/8/19.
 */
import React, {Component} from "react";
import {View, Text} from "react-native";
import Styles from "../style/Styles";
import TextStyle from "../style/Text";

export default class TripSegmentCard extends Component {
    render() {
        return (
            <View style={Styles.tripSegmentCard}>
                <View style={Styles.tripSegmentCardLine}>
                    <View style={Styles.verticalAlignLeft}>
                        <Text style={TextStyle.text_20_333333}>上海</Text>
                        <Text style={TextStyle.text_16_888888}>虹桥T2</Text>
                    </View>
                    <View style={Styles.verticalAlignCenter}>
                        <Text style={TextStyle.text_14_888888}>MU6815</Text>
                        <Text style={TextStyle.text_12_888888}>2016-08-19</Text>
                    </View>
                    <View style={Styles.verticalAlignRight}>
                        <Text style={TextStyle.text_20_333333}>香港</Text>
                        <Text style={TextStyle.text_16_888888}>香港T2</Text>
                    </View>
                </View>
                <View style={Styles.tripSegmentCardLine}>
                    <Text style={TextStyle.text_36_333333}>19:15</Text>
                    <Text style={TextStyle.text_36_333333}>21:45</Text>
                </View>
            </View>
        );
    }
}
