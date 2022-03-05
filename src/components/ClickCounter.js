import withCounter from "./HOS/wothCounter";

const ClickCounter=(props)=>{
    const {count,IncrementCount}=props;
    return(
        <div>
            <button type="button" onClick={IncrementCount}>Clickd {count} </button>
        </div>
    )
}
export default withCounter(ClickCounter);