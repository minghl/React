import React, { Component } from 'react'
import {flushSync} from 'react-dom'
// flushSync:可以刷新“updater更新队列”，也就是让修改状态的任务立即批处理一次

export default class Demo extends Component {
    state = {
        x: 10,
        y: 5,
        z: 0
    }

    handle = () => {
        let { x, y, z } = this.state;
        this.setState({ x: x + 1 })
        console.log(this.state);
        flushSync(()=>{
            this.setState({ y: y + 1 })
            console.log(this.state);
        })
        console.log(this.state);
        // 在修改z之前，要保证x/y都已经更改和让视图更新了
        this.setState({ z: this.state.x + this.state.y })
    }

    render() {
        console.log("视图渲染：render");
        let { x, y, z } = this.state
        return (
            <div>
                x:{x} - y:{y} - z:{z}
                <br />
                <button onClick={this.handle}>按钮</button>
            </div>
        )
    }
}

/*
    this.setState([partialState],[callback])
        [partialState]:支持部分状态修改
            this.setState({
                x:100 // 不论总共有多少状态，我们只修改了x，其余状态不动
            })
        [callback]:在状态更改，视图更新完毕后触发执行「只要执行了setState，callback一定会执行」
            + 发生在componentDidUpdate周期函数之后「DidUpdate会在任何状态更改后都触发执行；而回调函数方式，可以在指定状态更新后处理一些事情」
            + 特殊：即便我们基于shouldComponentUpdate阻止了状态/视图的更新，DidUpdate周期函数肯定不止行了，但是我们设置的这个callback会调函数依然会被执行
*/ 