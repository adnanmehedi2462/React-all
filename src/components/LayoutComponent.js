import UsewindowWidth from "./hooks/useWindowWidth";
export default function LayoutComponentOne(){
  const onSmallScreen=UsewindowWidth(700);
    return(
        <div>
            <h1>yor browse on {onSmallScreen?"small":"large"} screen</h1>
        </div>

    )
}