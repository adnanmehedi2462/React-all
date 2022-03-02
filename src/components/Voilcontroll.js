import React from 'react';
import { convart, toCelsius, toFahrenheit } from '../lib/Convart';
import Tempcheck from './Tempcheck';
import Tempinput from './Tempinput';
export default class Calculator extends React.Component{
    state={
        Temp:'',scal: 'c'
    }
    handelChange=(e,scal)=>{
        this.setState({
            Temp:e.target.value,
            scal,

        })
    }
    render() {
  

    const{Temp,scal}=this.state;
    const celsius = scal==='f'? convart(Temp,toCelsius):
    Temp;
    const fahrenheit = scal==='c'? convart(Temp,toFahrenheit):
    Temp;
        return(
            
            <div>
                <Tempinput scal="c" Temp={celsius} OnTempChange={this.handelChange} />
                <Tempinput scal="f" Temp={fahrenheit} OnTempChange={this.handelChange} />
                <Tempcheck  celsius={parseFloat(Temp)}  />

            </div>
        )

    }
}