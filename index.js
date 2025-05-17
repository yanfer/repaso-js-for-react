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
 sendMail: function () {
  return "sending email...";
 },
};

console.log(user);
console.log(user.address.city);
/* si quiero que solo me muestre la funcion es asi */
console.log(user.sendMail);
/* si quiero que ejecute la funcion, es asi */
console.log(user.sendMail());
