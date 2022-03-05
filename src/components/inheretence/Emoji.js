import React from "react";

export default class Emoji extends React.Component{
   addEmoji =(text,emoji,Promise)=>` ${emoji}  ${text} ${emoji}`;
    render(override){
        let text='';
        if(override){
            text=override;

        } 


        return <div>{text}</div>;

    }
}