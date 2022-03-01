import React from 'react';

class Clock extends React.Component{
    state={date:new Date(),locals:'en-US'};
    componentDidMount(){
        this.ClockTimer=setInterval(() => {
          this.trick();
        }, 1000);
    }
    componentWillUnmount(){
        clearInterval(this.ClockTimer);
    }
  
    trick(){
        this.setState ({
            date:new Date(),
        });
    }
    clickChack=(local)=>{
       
        this.setState({
            locals:local,
        })
    }
 
    render(){
        
        const {locals}=this.state;
     
      
        return(   
            <div>
               <h1>Time is {this.state.date.toLocaleTimeString(locals)}</h1>
              
            {locals==='bn-BD' ? <button type="button" onClick={()=>this.clickChack('en-US')} >Move English</button>:
             <button type="button" onClick={()=>this.clickChack('bn-BD')} >Move Bangla</button> }
  
            </div>
        );
    }
}

 
export default Clock;  