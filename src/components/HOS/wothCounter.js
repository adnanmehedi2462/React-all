import React from 'react';

const withCounter=(MainComponent)=>{
    class Updatecomponent extends React.Component{
        state = {
            count:0,
        }
        IncrementCount=()=>{
            this.setState((prevState)=>({count:prevState.count+1}));
        }
        render(){
            const {count}=this.state;
            return <MainComponent count={count} IncrementCount={this.IncrementCount} />

        }
    
    }
    return Updatecomponent;
}
export default withCounter;
