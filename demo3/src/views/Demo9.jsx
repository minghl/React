import React, { useEffect, useRef, useState } from "react";
import { Button } from 'antd';
import './Demo.less';

let prev1,prev2;
const Demo = function Demo() {
    let [num,setNum] = useState(0)

   let box1 = useRef(null),
    box2 = React.createRef();
    if(!prev1){
        // 第一次DEMO执行，把第一次创建的REF对象赋值给变量
        prev1 = box1;
        prev2 = box2
    }else{
        // 第二次DEMO执行，我们验证一下，新创建的REF对象，和之前第一次创建的REF对象，是否一致
        console.log(prev1===box1); // true useRef在每一次组件更新的时候（函数重新执行），再次执行useRef方法的时候，不会创建新的REF对象了，获取到的还是第一次创建的那个REF对象
        console.log(prev2===box2); // false createRef在每一次组件更新的时候，都会创建一个全新的REF对象出来，比较浪费性能
    }
   useEffect(()=>{
    console.log(box1.current);
    console.log(box2.current);
   },[])
    return <div className="demo">
        <span className="num" ref={box1}>
            {num}
        </span>
        <span className="num" ref={box2}>
            哈哈哈
        </span>
        <Button type="primary" size="small" onClick={()=>{
            setNum(num+1)
        }}>新增</Button>
    </div>; 
}
export default Demo;

// const Demo = function Demo() {
//     let [num,setNum] = useState(0)
//     /*
//         函数组件中，还可以基于 useRef Hook函数，创建一个ref对象
//             + React.createRef 也是创建ref对象，既可在类组件中使用，也可以在函数组件中使用
//             + useRef 只能在函数组件中用「所有的ReactHook函数，都只能在函数组件中使用，在类组件中使用会报错」
//     */ 
//    let box = useRef(null);
//    console.log(box.current);
//    useEffect(()=>{

//    },[])
//     return <div className="demo">
//         <span className="num" ref={box}>
//             {num}
//         </span>
//         <Button type="primary" size="small" onClick={()=>{
//             setNum(num+1)
//         }}>新增</Button>
//     </div>; 
// }
// export default Demo;