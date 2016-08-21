/**
 * Created by xiajw on 2016/8/21.
 */
import React, {
    Component,
    PropTypes,
} from 'react';

import {
    AppRegistry,
    ART,
    Text,
    View,
} from 'react-native';

import Arc from './arc';

function makePath() {

    return path;
}

class CircleScore extends Component {
    static propTypes = {
        borderColor: PropTypes.string,
        borderWidth: PropTypes.number,
        color: PropTypes.string,
        direction: PropTypes.oneOf(['clockwise', 'counter-clockwise']),
        formatText: PropTypes.func,
        indeterminate: PropTypes.bool,
        progress: PropTypes.number,
        showsText: PropTypes.bool,
        size: PropTypes.number,
        textStyle: PropTypes.any,
        thickness: PropTypes.number,
        unfilledColor: PropTypes.string,
    };

    static defaultProps = {
        borderWidth: 1,
        color: 'rgba(0, 122, 255, 1)',
        direction: 'clockwise',
        formatText: progress => Math.round(progress * 100) + '%',
        progress: 0,
        showsText: false,
        size: 40,
        thickness: 3,
    };

    render() {
        let {
            borderColor,
            borderWidth,
            color,
            children,
            direction,
            formatText,
            indeterminate,
            progress,
            showsText,
            size,
            textStyle,
            thickness,
            unfilledColor,
            ...restProps,
        } = this.props;

        borderWidth = borderWidth || (indeterminate ? 1 : 0);

        const radius = size / 2 - borderWidth;
        const offset = {
            top: borderWidth,
            left: borderWidth,
        };
        const textOffset = borderWidth + thickness;
        const textSize = size - textOffset * 2;

        let path = ART.Path();
        path.onArc(100, 50, 0, 50, 50, 50, 50, 50, Math.PI, 0);
        return (
            <View {...restProps}>
                <ART.Surface
                    width={size}
                    height={size}>
                    <ART.Shape
                        d={path}
                        fill="#ffff00"
                        stroke="#ff0000"
                        strokeCap="butt"
                        strokeWidth={5}

                        {...restProps}
                    />
                </ART.Surface>
            </View>
        );
    }
}

export default class ScoreView extends Component {
    render() {
        return (
            <CircleScore
                size={100}
                progress={0.5}
                indeterminate={false}
            />
        )
    }
}

AppRegistry.registerComponent("ScoreView", () => ScoreView);