function hello() {
 return "hola mundo";
}

const result = hello();
console.log(result);

function hello2() {
 return function () {
  return "hola mundo";
 };
}

const result2 = hello2();
/* o puede ser console.log(hello()()) para acceder a la segunda funcion */
console.log(result2());

/* ------PARAMETROS DE FUNCIONES------ */

//Los parametros son los valores que nuestra funcion puede esperar para procesarlos

function hello3(name) {
 return "hola " + name;
}

console.log(hello3("Daniel"));

function add(x, y) {
 return x + y;
}

console.log(add(10, 20));

/* ------PARAMETROS POR DEFECTO------ */

function add2(x, y) {
 return x + y;
}

console.log(add2(10)); // NaN

//Si no le ingreso el segundo parametro, se pone undefined por default
//Para arreglar eso se puede hacer lo siguiente

function add3(x = 0, y = 0) {
 return x + y;
}
//Asi si no ingresamos nada la respuesta es siempre 0
console.log(add3(10));

/* ------OBJETOS------ */

const user = {
 /* Propiedades */
 name: "Mario",
 lastname: "Bros",
 age: 30,
 address: {
  country: "USA",
  city: "New York",
  street: "100 1st Ave",
 },
 friends: ["Yoshi", "Luigi", "Peach"],
 active: true,
 /* Metodos */
 sendMail() {
  return "sending email...";
 },
};

console.log(user);
console.log(user.address.city);
/* si quiero que solo me muestre la funcion es asi */
console.log(user.sendMail);
/* si quiero que ejecute la funcion, es asi */
console.log(user.sendMail());

/* ------SHORTHAND PROPERTY NAMES------ */
const name = "laptop";
const price = 10000;

const newProduct = {
 /* antes se escribia
    name: name
    price: price */
 name,
 price,
};

console.log(newProduct);

/* ------MANIPULACION DEL DOM------ */
//Se pueden crear elementos desde JS
const title = document.createElement("h2");
//A ese objeto creado se puede modificar, en este caso, vamos a agregar texto
title.innerText = "Hola mundo desde JS";
//Y se pueden agregar a las etiquetas dentro del documento con el metodo append
document.body.append(title);

const button = document.createElement("button");
button.innerText = "click";
//podemos hacer que este boton tenga una funcion con un event handler o manejador de eventos
button.addEventListener("click", function () {
 title.innerText = "Texto actualizado con JS";
 alert("Se realizo un click");
 console.log("Hola mundo");
});
document.body.append(button);

/* ------OBJETOS COMO PARAMETROS------ */

const user2 = {
 name: "joe",
 age: 30,
};

function printInfo(user2) {
 return "<h1>Hola " + user2.name + "<h1>";
}

console.log(printInfo(user2)); // <h1>Hola joe<h1>

//Con innerHTML puedo reemplazar lo que se encuentre en la etiqueta y poner lo que vaya a agregar
document.body.innerHTML = printInfo(user2);

/* ------DESTRUCTURACION DE OBJETOS------ */

//Hay otra forma de acceder a elementos o propiedades de objetos, es usando corchetes y el nombre de la propiedad
function printInfo2(user2) {
 return "<h1>Hola " + user2["name"] + "<h1>";
}

console.log(printInfo2(user2));

//Otra forma es por medio de destructuring o destructurar un elemento y utilizar solo alunos valores de ese objeto

function printInfo3({ name }) {
 return "<h1>Hola " + name + "<h1>";
}

console.log(printInfo3(user2));

//Una manera mas usada de destructurar un elemento es la siguiente

function printInfo4(user) {
 //Asi sacamos los valores dentro del elemento user
 const { name, age } = user;
 console.log(name, age);

 return "<h1>Hola " + name + "<h1>";
}

console.log(printInfo4(user));

/* ------FUNCIONES ANONIMAS------ */

// Digamos que queremos hacer una funcion que inicie algo, normalmente usariamos una funcion normal
function start() {
 return "starting...";
}
console.log(start());

//Pero en JS no es necesario que una funcion tenga nombre

console.log(
 (function () {
  return "starting...";
 })() //al poner los corchetes fuera de la funcion dentro del console log la estoy activando al mismo tiempo
);

//En eventos se usa mucho una funcion anonima
const button2 = document.createElement("button");
button2.innerText = "click me";

button2.addEventListener("click", function () {
 alert("clicked");
});

document.body.append(button2);

//Tambien se puede hacer el evento de la siguiente manera

const button3 = document.createElement("button");
button3.innerText = "click me too";

function handleClick() {
 alert("clicked again");
}

button3.addEventListener("click", handleClick);

document.body.append(button3);

//pero puedo hacerlo con menos codigo usando una funcion anonima si no tiene mucho codigo, si es mucho entonces es mejor separarlo para poder entenderlo mejor

/* ------ARROW FUNCTIONS------ */

const sumar = (x, y) => {
 return x + y;
};
//con esto nos ahorramos escribir function, lo podemos utilizar tambien en el ejemplo anterior y funciona igual

/* button2.addEventListener("click",() => {
 alert("clicked");
}); */

/* ------INLINE ARROW FUNCTIONS------ */
const showText = () => {
 return "Hola Mundo";
};

console.log(showText());

//Las funciones flecha tambien ayudan a evitar las llaves y hacer una funcion en linea recta sin necesidad del return tampoco

const showText2 = () => "Hola mundo";

console.log(showText2());

//funciona con todo tipo de dato excepto con los objetos {} ya que si lo ponemos solo asi {name: yanfer} al poner los corchetes js piensa que es para el proceso de la funcion, no un objeto, asi que se hace lo siguiente

const showObject = () => ({ name: "Luigi" });
console.log(showObject());

/* ------RETURN------ */

//Vamos a hacer que retorne un texto diferente dependiendo del valor ingresado
const button4 = document.createElement("button");
button4.innerText = "click me twice";

const isAuthorized = true;

button4.addEventListener("click", () => {
 //un if es utilizado para poder romper el ciclo de una funcion
 /* if (isAuthorized) {
  alert("estas autorizado");
 } else {
  alert("no estas autorizado");
 } */

 //pero en funciones cuando queremos retornar valores, escribimos un return acabamos con la ejecucion de la funcion
 if (isAuthorized) {
  return alert("estas autorizado");
 }
 alert("no estas autorizado");
});

document.body.append(button4);

/* ------STRING LITERALS------ */
//podemos usar los valores de CSS dentro de JS

const background = "green";
const color = "yellow";

// seria muy dificil agregar los valores de string aqui, por eso en JS existe la interpolacion y aqui entra el concepto de "String Literals"
//Los string literals nos permiten concatenar o unir strings y tambien interpretar valores dentro de los strings
//Se usa `${}` para interpretar algo

button4.style = `background: ${
 isAuthorized ? background : "blue"
}; color: ${color};`;
//Tambien se pueden usar operadores ternarios dentro de los string literals como condicionales
