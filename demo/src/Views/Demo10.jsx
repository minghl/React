import React, { Component } from 'react'

export default class Demo extends Component {
    handle = () => {
        console.log('点击了按钮');
    }
    render() {
        return (
            <div>
                <button onClick={this.handle}>
                    提交
                </button>
            </div>
        )
    }
}
