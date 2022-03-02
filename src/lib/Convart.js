export function toCelsius(fahrenheit){
    return ((fahrenheit-32)*5)/9;
}

export function toFahrenheit(celsius){
    return (celsius*9/5)+32;
}



export function convart(Temp,convartTo){
    const input=parseFloat(Temp);
    if(Number.isNaN(input)){
        return '';
    }
    const output=convartTo(input);
    const round=Math.round(output * 1000)/1000;
    return round.toString();
}