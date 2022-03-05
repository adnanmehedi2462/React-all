import Emoji from "./Emoji";

export default class Text extends Emoji{
constructor(props){
    super(props);
}
    render(){ 
        const decoratedText=this.addEmoji('i love rafa','❤️');
        return super.render(decoratedText);
    }

}