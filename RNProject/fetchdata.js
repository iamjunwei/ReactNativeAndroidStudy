/**
 * Created by xiajw on 2016/7/26.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    Text,
} from 'react-native';

export default class FetchData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSuccess: false,
            key: [],
        }
    }

    _fetchData() {
        // http://www.jkydt.com/hckmymnks
        fetch('http://app.ybjk.com/Exam/kmy_kst_hc.js?km=kmy&mk=sxlx&act=kmy-sxlx&cx=hc')
            .then((response) => {
                for (var k in response) {
                    if((response[k] + "").indexOf("ExamsCnt") >= 0) {
                        this.setState({isSuccess: true});
                    }
                }
            });
    }

    componentWillMount() {
        this._fetchData();
    }

    render() {
        let str = "fetching";
        if(this.state.isSuccess) {
          str= "find it!";
        }
        return (
            <Text>{str}</Text>
        )
    }
}

AppRegistry.registerComponent("FetchData", () => FetchData);