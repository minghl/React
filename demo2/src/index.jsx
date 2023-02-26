import React from 'react';
import ReactDOM from 'react-dom/client';
import Task from './views/Task';
/* 使用ANTD组件库:全局配置 */ 
import {ConfigProvider} from 'antd'
import zhCH from 'antd/locale/zh_CN'
import './index.less'
// import Demo from './views/Demo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ConfigProvider locale={zhCH}>
        <Task/>
        {/* <Demo/> */}
    </ConfigProvider>
);