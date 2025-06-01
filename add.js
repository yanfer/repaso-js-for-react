//Para poder exportar esto a otro archivo js, necesitamos usar una sintaxis llamada export
export function addMore(x = 0, y = 0) {
 return x + y;
}

export function multiply(x, y) {
 return x * y;
}

export const title2 = "Js for react";
export const active = true;
export const points = [10, 20, 30];

//si en caso de que no exportemos nada en especifico, podemos quedirle a js que exporte algo por defecto
// podemos ponerle el nombre que querramos al importarlo en otro lado y nos dara lo que pongamos como default como resultado
export default title2;
