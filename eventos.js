/*
  Agrega espactaculos para ver en una cartelera, si ya pasaron primero cambian de estilo y luego
  se ocultan.

Licenciado bajo licencia MIT:

  MIT License

Copyright (c) 2023 Nicolas Pauer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

// Creo clases para reutilizar y simplificar codigo

class Show
{
  constructor()
  {
   /* Nombre del espectaculo */ 
      this.nombre = "";
   /* Donde o en que plataforma o medio se realiza */ 
      this.lugar = "";
    /* Quien será el mas resaltado en dicho evento si lo hubiera */
      this.protagonista = "";
    /* Que otros integrantes hay si los hay */
      this.elenco = [];
    /* En que categoría entra el evento */
      this.rubro = "";
    /* Lo hago así para que tenga un valor inicial y
       se sepa su tipo */
      this.fecha = new Date();
  }
}
// Instancio la clase con objetos para usar
const evento_1 = new Show();
// Con una instancia de la clase show iré agregando y cambiando shows a la grilla
/* Defino representacion de cartelera.

uso lista de objetos JSON ya inicializados para reducir llamdas al metodo push y
uso de constantes que consumen RAM y CPU, es preferible tener un pequeño
costo de actualización y monetizarlo que hacer una web ineficiente para el usuario.

  [Mejor una molestia eventual que uno constante]
*/
let cartelera = [
                  {nombre : 'laje en LN+', lugar : 'TV', rubro : 'television', fecha : (new Date(2024, 02, 05)), protagonista : 'Antonio Laje'},
                  {nombre : 'Cumple de Nico Pauer', lugar : 'Casa de Nico Pauer', rubro : 'charlas', fecha : (new Date(2024, 10, 27)), protagonista : 'Nico Pauer'},
                  {nombre : 'Aniversario de la fundación de Bahía Blanca', lugar : 'Bahía Blanca', rubro : 'charlas', fecha : (new Date(2024, 04, 11)), protagonista : 'Bahía Blanca'}
                ];
// Renderizado de los shows a mostrar en cartelera
// Selecciono elementos de la interfaz
const grilla = document.querySelector("#eventos-listado");
// Diccionario con los meses de formato javascript a gregoriano
const meses = {1:'Enero', 2:'Febrero', 3:'Marzo', 4:'Abril', 5:'Mayo', 6:'Junio', 7:'Julio', 8:'Agosto', 9:'Septiembre', 10:'Octubre', 11:'Noviembre', 12:'Diciembre'};
/* tiene que ser fuera del bucle y variable para evitar dupplicados */
let cartel;

for (let c in cartelera)
{
  // c es uno de los indices de cartelera, uso indexación para obtener el elemento
  cartel = cartelera[c];
  // Selecciono sección que corresponde al rubro del cartel
  const seccion = document.querySelector("#" + cartel.rubro);
 // Muestro cada uno de los eventos 
  seccion.innerHTML = seccion.innerHTML + '<p class = "evento">' + (cartel.nombre + ", " + cartel.protagonista + " el " + cartel.fecha.getDate() + " de " + meses[cartel.fecha.getMonth()] + " del " + cartel.fecha.getFullYear() + " en " + cartel.lugar + ".</p>");
}
