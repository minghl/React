import React, { useEffect, useLayoutEffect, useState } from "react";
import { Button } from 'antd';
import './Demo.less';

const Demo = function Demo() {
    let [num,setNum] = useState(0)
    useLayoutEffect(()=>{
        if(num===0){
            setNum(10)
        }
    },[num])
    return <div className="demo">
        <span className="num" style={{
            color:num===0?'red':'green'
        }}>
            {num}
        </span>
        <Button type="primary" size="small" onClick={()=>{
            setNum(0)
        }}>新增</Button>
    </div>; 
}
export default Demo;