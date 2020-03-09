//function dominio(texto){
    
    //return "digitalhouse.com.ar"

//}

//console.log(dominio().replace(dominio(),"http://digitalhouse.com.ar"))

let string = "digitalhouse.com.ar"
function dominio(string){
    return string.replace("","http://www.");
}
console.log(dominio(string))