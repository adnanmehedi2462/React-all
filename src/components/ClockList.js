
import Clock from "./Clock";





 export default function ClockList({qtys=[]}){
    return(
        <div className="adnan">
            {qtys.map(()=>(
            <Clock  key={Math.random()} />
            ))}
         
        </div>
    );
}