/**
 * Created by xiajw on 16/8/19.
 */
import React, {Component} from "react";
import {View} from "react-native";
import TripSegmentCard from "../components/TripSegmentCard";
import ComfortScore from "../components/ComfortScore";
import Styles from "../style/Styles";

export default class TripCard extends Component {
    render() {
        return (
            <View>
                <View style={Styles.tripSegmentCardArea}>
                    <View style={Styles.tripSegmentCardLeftHint}/>
                    <TripSegmentCard />
                    <View style={Styles.tripSegmentCardRightHint}/>
                </View>
                <ComfortScore/>
            </View>
        );
    }
}