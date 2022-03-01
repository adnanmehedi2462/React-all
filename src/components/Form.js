import React from 'react';
export default class Form extends React.Component{
    state = {
        title:'jss',
        text:'loves rafas',
        fram:"php",


}
    handelClick =(e)=>{
        // console.log(e.target.value)
         if(e.target.name === 'adnan'){
            this.setState({
                title: e.target.value,         
              });
         }
         else if(e.target.name ==='rafa'){
            this.setState({
                text: e.target.value,        
              });
            
         }
         else if(e.target.type ==='select-one'){
            
            this.setState({
                fram: e.target.value,        
              });
            
         }
         else{
             console.log("else option");
         }
    };

subhandel=(e)=>{
    const {title,text,fram} = this.state;
    e.preventDefault();
    console.log(title,text,fram);
}
    render(){
        const {title,text,fram} = this.state;
    

        return(
           
            <div>
                <form onSubmit={this.subhandel}>
                    <input type="text" name="adnan" placeholder="enter title" value={title} onChange={this.handelClick}   />
                    <br></br>
                    <br></br>
                    <textarea type="texterea" name="rafa"  cols="50" rows="6" value={text} onChange={this.handelClick}>loves</textarea>
                    <br></br>
                    <br></br>
                    <select type="select" value={fram} onChange={this.handelClick}>
                        <option value="js">js</option>
                        <option  value="css">css</option>
                        <option  value="php">php</option>
                    </select>
                    <input type="submit"></input>
                </form>
             
            </div>
        )
    }
}
