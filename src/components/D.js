import React, { Component } from 'react';
import PropTypes from 'prop-types';
// 组件D
class D extends Component {
    render() {

        return <div>hello{this.context.username}</div>
    }
}
D.contextTypes  = {
    username: PropTypes.string
}
export default D;