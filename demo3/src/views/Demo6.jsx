import React, { useEffect, useState } from "react";
import { Button } from 'antd';
import './Demo.less';

/*
    useEffect: 在函数组件中，使用生命周期函数
        useEffect(callback): 没设置依赖
            + 第一次渲染完毕后，执行callback，等价于 componentDidMount
            + 在组件第一次更新完毕后，也会执行callback，等价于 componentDidUpdate
        
        useEffect(callback,[]): 设置了，但是无依赖
            + 只有第一次渲染完毕后，才会执行callback，每一次视图更新完毕后，callback不再执行
            + 类似于 componentDidMount
        
        useEffect(callback,[依赖的状态(多个状态)]): 
            + 第一次渲染完毕会执行callback
            + 当依赖的状态值（或者多个依赖状态中的一个）发生改变，也会触发callback执行
            + 但是依赖的状态如果没有变化，在组件更新的时候，callback是不会执行的
        
        useEffect(()=> {
            return ()=>{
                // 返回的小函数，会在组件释放的时候执行
                // 如果组件更新，会把上一次函数执行，返回的小函数执行「理解为上一次渲染的组件释放了」
            }
        }): 
        
*/ 
const Demo = function Demo(props ) {
    let [num,setNum] = useState(0),
        [x,setX] = useState(100)

    useEffect(()=>{
        // 获取最新的状态值
        console.log('@1',num);
    })
    useEffect(()=>{
        // 获取最新的状态值
        console.log('@2',num);
    },[])
    useEffect(()=>{
        // 获取最新的状态值
        console.log('@3',num);
    },[num])
    useEffect(()=> {
        return ()=>{
            // 获取的是上一次的状态值
            console.log('@4',num);
        }
    },[num]); 
    const handle = () => {
        setNum(num+1);  
    }
    return <div className="demo">
        <span className="num">{num}</span>
        <Button type="primary" size="small" onClick={handle}>新增</Button>
    </div>; 
};
export default Demo;