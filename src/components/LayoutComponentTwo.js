import UsewindowWidth from "./hooks/useWindowWidth";
export default function LayoutComponentTwo(){
   const onSmallScreen=UsewindowWidth(800);
    return(
        <div className={onSmallScreen?"small":"large"}>
            <h1>this is another Component</h1>
        </div>

    )
}