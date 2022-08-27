function numeroString(num){
    let numero = [];
    for(let i=1; i<num+1; i++) 
        if(i % 5 == 0 && i % 9 == 0){
            numero.push("LuidyMoura");
        }else if(i % 5 == 0){
            numero.push("Luidy");
        }else if(i % 9 == 0) {
            numero.push("Moura");
        }else {
            numero.push(i); 
    }
    console.log(numero)
}

numeroString(45)