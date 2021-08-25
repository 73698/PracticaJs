var a = 3;
var b =12;
var c = 2;
document.write("<h1>Siendo a=3, b=12 y c=2 calcular la raices de la ecuación cuadrática utilizando la formula general</h1>");
console.log("Siendo a=3, b=12 y c=2 calcular la raices de la ecuación cuadrática utilizando la formula general");
var r = ((b*b)-(4*(a*c)));
var x1 = ((-b)+ Math.sqrt(r))/3
console.log(x1);
var x2 = ((-b)- Math.sqrt(r))/3
console.log(x2);
document.write("<h2>El resultado de x1 es: </h2>", x1);
document.write("<h2>El resultado de x2 es: </h2>", x2);