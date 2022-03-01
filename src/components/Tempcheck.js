

export default function Tempcheck({celsius=0}){
    if(celsius >= 100){
        return <p>water is voil</p>
    }
    else{
        return <p>water is not voil</p>
    }
   
}
