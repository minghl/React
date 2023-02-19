import React from 'react';
import ReactDOM from 'react-dom/client';
import Demo from './Views/Demo11';
// import "./index.less"
import FastClick from 'fastclick';

/* 使用FastClick解决移动端使用click事件的300ms延迟问题 */ 
FastClick.attach(document.body);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
        <Demo/>
    </>
)



// import Dialog from './Components/Dialog';


// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//     <>
//         <Dialog title="友情提示" content="大家出门做好个人防护" />

//         <Dialog content="我们一定要好好学React！" >
//             <button>确定</button>
//             <button>很确定</button>
//         </Dialog>
//     </>
// )

