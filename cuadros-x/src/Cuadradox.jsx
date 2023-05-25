import React from "react";

function CuadrodadoX () {
  const dibujarCuadrado = (numero) => {
    if (numero < 5 || numero > 10) {
   alert("El numero debe ser entre  5 y 10 ");
    return;
    }
  let cuadrado = "";
  for (let fila = 0; fila < numero; fila++){
    let filaCuadrado = "";
    for (let columna = 0; columna < numero; columna++){
    if (
      fila === 0 ||
      fila === numero - 1 ||
      columna === 0 ||
      columna === numero -1 ||
      fila === columna
    ) {
      filaCuadrado +="x";
  } else {
      filaCuadrado +="-";
   } 
  }
cuadrado += filaCuadrado +"\n";
}
alert(cuadrado);
};

return (
  <diV>
    <h1> Cuadros  en X </h1> 
    <button onClick={() => dibujarCuadrado(8)}> click para dibujar Cuadrado</button>
  </diV>
);
} 

export default CuadrodadoX; 