/*
        + 函数组件是“静态组件”
        第一次渲染组件，把函数执行
            + 产生一个私有的上下文 「EC(V)」
            + 把解析出来的props「含children」传递进来「但是被冻结了」
            + 对函数返回的JSX元素「virtualDOM」进行渲染
        当我们点击按钮的时候，会把绑定的小函数执行：
            + 修改上级上下文EC(V)中的变量
            + 私有变量值发生了变化
            + 但是“视图不会更新”
        => 也就是，函数组件第一次渲染完毕后，组件中的内容，不会根据组件中的某些操作，在进行更新，所以称它为静态组件
*/ 

const Vote = function Vote(props){
    let {title} = props
    let supNum = 10,
        oppNum = 5

    return <div className="vote-box">
        <div className="header">
            <h2 className="title">{title}</h2>
            <span>{supNum+oppNum}人</span>
        </div>
        <div className="main">
            <p>支持人数：{supNum}人</p>
            <p>反对人数：{oppNum}人</p>
        </div>
        <div className="footer">
            <button onClick={()=>{
                supNum++
            }}>支持</button> 

            <button onClick={()=>{
                oppNum++
            }}>反对</button> 
        </div>
    </div>
}
export default Vote