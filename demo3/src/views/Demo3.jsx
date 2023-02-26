import React, { useState } from "react";
import { Button } from 'antd';
import './Demo.less';

/*
    在React16中，也和this.setState一样，放在合成事件/周期函数中，其实异步的操作；但是放在其他的异步操作中「例如：定时器、手动的事件绑定等」它是同步的
*/ 
const Demo = function Demo() {
    console.log("RENDER渲染");
    let [x,setX] = useState(10),
        [y,setY] = useState(20),
        [z,setZ] = useState(30)
    const handle = () => {
        setX(x+1);
        setY(y+1);
        setZ(z+1);
    }
    return <div className="demo">
        <span className="num">x:{x}</span>
        <span className="num">y:{y}</span>
        <span className="num">z:{z}</span>
        <Button type="primary" size="small" onClick={handle}>新增</Button>
    </div>;
};
export default Demo;