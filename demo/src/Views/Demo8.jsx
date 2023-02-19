import React, { Component } from 'react'


export default class Demo extends Component {
  render() {
    return (
      <div className='outer' onClick={()=>{
        console.log('outer 冒泡「合成」');
    }}
    onClickCapture={()=>{
        console.log('outer 捕获「合成」');
    }} >
        <div className="inner" onClick={(ev)=>{
            // 合成事件对象
            console.log('inner 冒泡「合成」',ev);
            // ev.stopPropagation();// 合成事件中的“阻止事件传播”：阻止原生的事件传播&&阻止合成的事件传播
            // ev.nativeEvent.stopPropagation(); // 原生事件对象中“阻止事件传播”：只能阻止原生事件的传播
            // ev.nativeEvent.stopImmediatePropagation(); // 原生事件对象的阻止事件传播，只不过可以阻止#root上其他绑定的方法执行
        }}
        onClickCapture={()=>{
            console.log('inner 捕获「合成」');
        }} 
        ></div>
      </div>
    )
  }


  componentDidMount(){
    document.addEventListener('click',()=>{
        console.log('document捕获');
    },true)
    document.addEventListener('click',()=>{
        console.log('document冒泡');
    },false)
    document.body.addEventListener('click',()=>{
        console.log('body捕获');
    },true)
    document.body.addEventListener('click',()=>{
        console.log('body冒泡');
    },false)

    let root = document.querySelector("#root")
    root.addEventListener('click',()=>{
        console.log('root 捕获');
    },true)
    root.addEventListener('click',()=>{
        console.log('root 冒泡');
    },false)
    let outer = document.querySelector(".outer")
    outer.addEventListener('click',()=>{
        console.log('outer 捕获「原生」');
    },true)
    outer.addEventListener('click',()=>{
        console.log('outer 冒泡「原生」');
    },false)
    let inner = document.querySelector(".inner")
    inner.addEventListener('click',()=>{
        console.log('inner 捕获「原生」');
    },true)
    inner.addEventListener('click',()=>{
        console.log('inner 冒泡「原生」');
    },false)
  }
}

/*
    React中合成事件的处理原理
        绝对不是给当前元素基于addEventListener单独做的事件绑定，React的合成事件，都是基于“事件委托”处理的
            + React17及以后版本，都是委托给#root这个容器「捕获和冒泡都做了委托」；
            + 在17版本以前，都是委托给document容器的「而且只做了冒泡阶段的委托」；
            + 对于没有实现事件传播机制的事件，才是单独做的事件绑定「例如：onMouseEnter/onMouseLeave...」
        
        在组件渲染的时候，如果发现JSX元素属性中有 onXxx/onXxxCapture 这样的属性，不会给当前元素直接作事件绑定，只是把绑定的方法赋值给元素的相关属性。例如：
            outer.onClick=()=>{console.log('outer 冒泡「合成」');} //这不是DOM0级事件绑定「这才是outer.onclick」
            outer.onClickCapture={()=>{console.log('outer 捕获「合成」');}}

        然后对#root这个容器做了事件绑定「捕获和冒泡都做了」
            原因：因为组件中所渲染的内容，都会插入到#root容器中，点击页面中任何一个元素，最后都会把#root的点击行为触发
            而在给#root绑定的方法中，把之前给元素设置的onXxx/onXxxCapture属性，在相应的阶段执行

*/ 