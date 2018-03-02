import React, { Component } from 'react';
import PropTypes from 'prop-types';
import D from './D'
// 组件A
class A extends Component {
    // 其他代码省略，只上关键代码
    constructor(props) {
        super(props);
        this.state = {
            username: 'wjl'
        };
    }
    getChildContext() {
        return {
            username: this.state.username
        };
    }
    render(){
        return (<div>
            <h1>我是D组件</h1>
            <D/>
        </div>)
    }
}

A.childContextTypes = {
    username: PropTypes.string
};
export default A;