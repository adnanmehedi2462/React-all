

export default function Tempcheck({celsius=0}){
    if(celsius >= 100){
        return <p>water could boil</p>
    }
    else{
        return <p>water could not boil</p>
    }
   
}
