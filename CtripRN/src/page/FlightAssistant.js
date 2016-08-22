/**
 * Created by xiajw on 16/8/19.
 */
import React from "react";
import {View} from "react-native";
import {Page, HeaderView} from "@ctrip/crn";
import Styles from "../style/Styles";
import Swiper from "../components/Swiper";
import TripCard from "../../src/components/TripCard";

export default class FlightAssistant extends Page {
    render() {
        return (
            <View style={Styles.root}>
                <HeaderView title="乘机助手" page={this}/>
                <Swiper
                    loop={false}
                    showsPagination={false}>
                    <TripCard/>
                    <TripCard/>
                </Swiper>
            </View>
        );
    }
}