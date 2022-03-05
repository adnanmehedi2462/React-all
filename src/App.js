// import Emoji from "./components/composition/Emoji";
// import Text from "./components/composition/Text";


import ClickCounter from "./components/ClickCounter";
// import User from "./components/User";
import Counter from "./components/Counter";
import HoverCount from "./components/HoverCount";


function App() {
 return (
   <div>
     {/* <ClickCounter /> */}
     {/* <HoverCount /> */}

     {/* <User name={(isLogin)=>(isLogin?'loves True':'plese login')} /> */}
     <Counter render={(count,incrementCount)=> (
     <ClickCounter incrementCount={incrementCount} count={count} />)} />
    <Counter render={(count,incrementCount)=> (
     <HoverCount incrementCount={incrementCount} count={count} />)} />
   </div>
 )

}

export default App;

