import axios from "axios";
import qs from 'qs';
import { message } from 'antd';
import _ from '@/assets/utils';

const http = axios.create({
    baseURL: '/api', // 所有请求都会加
    timeout: 60000 // 超时时间
});
http.defaults.transformRequest = data => {
    if (_.isPlainObject(data)) data = qs.stringify(data); // 普通对象转化为urlencoded字符串
    return data;
};
http.interceptors.response.use(response => {
    return response.data; // 响应拦截器，成功
}, reason => {
    // 网络层失败：统一提示
    message.error('当前网络繁忙，请您稍后再试~');
    return Promise.reject(reason);
});
export default http;