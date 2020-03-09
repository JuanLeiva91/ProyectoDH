function reemplazoFastFast(texto, buscar, remplazar){
   let inicioPalabra = texto.indexOf(buscar);
   let finalPalabra = buscar.length;
   let palabra = inicioPalabra + finalPalabra;
   let src = texto.slice(inicioPalabra, palabra);
   let resultado = texto.replace(src, remplazar);
   console.log(resultado);
}

reemplazoFastFast ('Este texto es mala onda','mala','buena')