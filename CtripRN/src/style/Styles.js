/**
 * Created by xiajw on 16/8/19.
 */
import {StyleSheet} from "react-native";

const Styles = StyleSheet.create({

    /** common */
    root: {
        flex: 1
    },
    fill: {
        flex: 1,
    },
    verticalAlignLeft: {
        alignItems: 'flex-start',
    },
    verticalAlignRight: {
        alignItems: 'flex-end',
    },
    verticalAlignCenter: {
        alignItems: "center",
    },

    /** tripSegmentCardArea */
    tripSegmentCardArea: {
        flexDirection: "row",
        alignItems: "stretch",
        marginTop: 10,
    },
    tripSegmentCardLeftHint: {
        width: 10,
        backgroundColor: "#fffbe3",
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
    },
    tripSegmentCardRightHint: {
        width: 10,
        backgroundColor: "#fffbe3",
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
    },

    /** tripSegmentCard */
    tripSegmentCard: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 4,
        backgroundColor: "#fffbe3",
        padding: 15,
    },
    tripSegmentCardLine: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    /** comfortScore */
    comfortScore: {
        width: 100,
        height: 100,
    },
    comfortScoreContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    comfortScoreTextContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Styles;