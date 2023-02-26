import React, { useState } from "react";
import { Button } from 'antd';
import './Demo.less';

const Demo = function Demo(props ) {
    // 我们需要把基于属性传递进来的x和y，相加后（或者经过其他处理）的结果作为初始值
    // 此时我们需要对初始值的操作，进行惰性化处理：只有第一次渲染组件处理这些逻辑，以后组件更新，这样的逻辑就不要再执行了
    

    let [num,setNum] = useState(()=>{
        let {x,y} = props,
        total = 0
    
        for (let i = x; i < y; i++) {
            total += +String(Math.random()).substring(2);
        }
        return total
    })

    const handle = () => {
        setNum(1000)
    }
    return <div className="demo">
        <span className="num">{num}</span>
        <Button type="primary" size="small" onClick={handle}>新增</Button>
    </div>; 
};
export default Demo;