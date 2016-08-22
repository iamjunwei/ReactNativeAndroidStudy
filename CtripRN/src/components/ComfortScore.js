/**
 * Created by xiajw on 16/8/19.
 */
import React, {Component} from "react";
import {View, Text} from "react-native";
import Styles from "../style/Styles";
import TextStyle from "../style/Text";
import {CircularProgress} from "react-native-circular-progress";

export default class ComfortScore extends Component {

    render() {
        return (
            <View style={Styles.comfortScoreContainer}>
                <View style={Styles.comfortScore}>
                    <CircularProgress
                        size={100}
                        width={5}
                        fill={35}
                        tintColor="#ffff00"
                        backgroundColor="#ff0000"
                        rotation={0}>
                        {
                            (fill) => {
                                return (
                                    <View style={Styles.comfortScoreTextContainer}>
                                        <Text style={TextStyle.text_30_333333}>{100-fill}</Text>
                                        <Text style={TextStyle.text_12_888888}>舒适度</Text>
                                    </View>
                                )
                            }
                        }
                    </CircularProgress>
                </View>
            </View>
        );
    }
}