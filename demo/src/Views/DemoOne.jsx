import PropTypes from "prop-types"
const DemoOne = function DemoOne(props){
    let {className, style, title} = props;

    return <div className={`demo-box ${className}`} style={style}>
        <h2 className="title">{title}</h2>
    </div>
}
DemoOne.propTypes = {
    title:PropTypes.string.isRequired,
    x:PropTypes.number
}
export default DemoOne