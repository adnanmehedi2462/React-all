import React from 'react';
import Tempcheck from './Tempcheck';
export default class Calculator extends React.Component{
    state = {
        Temp: ''

    }
    OnTempChange=(e)=>{
        this.setState({
            Temp: e.target.value
        })

    }
    render() {
  
        const {Temp}=this.state;
    
        return(
            
            <div>
                <fieldset>
                    <legend>Input fild</legend>
                    <input type="text" value={Temp} onChange={this.OnTempChange} />
                </fieldset>
             <Tempcheck  celsius={parseFloat(Temp)}  />

            </div>
        )

    }
}