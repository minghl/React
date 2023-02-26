import React, { Component } from 'react'

export default class Demo extends Component {
    state={
        email:''
    }
  render() {
    return (
      <div>
        <input type="text" value={this.state.email} onChange={ev=>{
            let target = ev.target,
                text = target.value.trim()
                this.setState({
                    email:text
                })
        }}/>
      </div>
    )
  }
}

/*
    Vue是MVVM框架：数据驱动视图渲染、视图驱动数据更改「自动检测页面中表单元素的变化，从而修改对应的状态」双向驱动
    React是MVC框架：数据驱动视图渲染 单向驱动
        需要自己手动实现，视图变化，去修改相关的状态
*/ 
