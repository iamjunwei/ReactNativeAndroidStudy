/**
 * Created by xiajw on 2016/8/21.
 */
import React, {
    Component,
    PropTypes,
} from 'react';

import { ART, ToastAndroid } from 'react-native';

const CIRCLE = Math.PI * 2;

function makeArcPath(x, y, startAngleArg, endAngleArg, radius, direction) {
    let startAngle = startAngleArg;
    let endAngle = endAngleArg;
    const arcMethod = direction === 'counter-clockwise' ? 'counterArc' : 'arc';
    if (endAngle - startAngle >= CIRCLE) {
        endAngle = CIRCLE + (endAngle % CIRCLE);
    } else {
        endAngle = endAngle % CIRCLE;
    }
    startAngle = startAngle % CIRCLE;

    const angle = startAngle > endAngle ? CIRCLE - startAngle + endAngle : endAngle - startAngle;


    let path = ART.Path();

    if (angle >= CIRCLE) {
        path
            .moveTo(x + radius, y)
            [arcMethod](0, radius * 2, radius, radius)
            [arcMethod](0, radius * -2, radius, radius)
            .close();
    } else {
        const directionFactor = direction === 'counter-clockwise' ? -1 : 1;
        endAngle *= directionFactor;
        startAngle *= directionFactor;
        const startSine = Math.sin(startAngle);
        const startCosine = Math.cos(startAngle);
        const endSine = Math.sin(endAngle);
        const endCosine = Math.cos(endAngle);
        const deltaSine = endSine - startSine;
        const deltaCosine = endCosine - startCosine;

        ToastAndroid.show("x: " + x + "  y: " + y, ToastAndroid.LONG);
        ToastAndroid.show("start: " + startAngle + "  end: " + endAngle, ToastAndroid.LONG);
        ToastAndroid.show("angle: " + angle + "  Circle: " + CIRCLE, ToastAndroid.LONG);
        ToastAndroid.show("deltaSine: " + deltaSine + "  deltaCosine: " + deltaCosine, ToastAndroid.LONG);

        path
            .moveTo(x + radius * (1 + startSine), y + radius - radius * startCosine)
            [arcMethod](radius * deltaSine, radius * -deltaCosine, radius, radius, angle > Math.PI);
    }
    return path;
}

export default class Arc extends Component {
    static propTypes = {
        startAngle: PropTypes.number.isRequired, // in radians
        endAngle: PropTypes.number.isRequired, // in radians
        radius: PropTypes.number.isRequired,
        offset: PropTypes.shape({
            top: PropTypes.number,
            left: PropTypes.number,
        }),
        strokeWidth: PropTypes.number,
        direction: PropTypes.oneOf(['clockwise', 'counter-clockwise']),
    };

    static defaultProps = {
        startAngle: 0,
        offset: { top: 0, left: 0 },
        strokeWidth: 0,
        direction: 'clockwise',
    };

    render() {
        const { startAngle, endAngle, radius, offset, direction, strokeWidth, ...restProps } = this.props;
        const path = makeArcPath(
            (offset.left || 0) + strokeWidth / 2,
            (offset.top || 0) + strokeWidth / 2,
            startAngle,
            endAngle,
            radius - strokeWidth / 2,
            direction
        );
        return (
            <ART.Shape
                d={path}
                strokeCap="butt"
                strokeWidth={strokeWidth}
                {...restProps}
            />
        );
    }
}