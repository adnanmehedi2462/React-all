import React from 'react';

class Button extends React.Component{
render(){
    return(<button type="button" onClick={this.clickChack} >Click me</button>);
}
}

export default Button;