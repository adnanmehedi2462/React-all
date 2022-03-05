import withCounter from "./HOS/wothCounter";

const HoverCounter=(props)=>{
    const {count,IncrementCount}=props;
    return(
        <div>
            <h1 onMouseOver={IncrementCount}>Hover {count} </h1>
        </div>
    )
}
export default withCounter(HoverCounter);