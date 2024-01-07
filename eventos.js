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
// evento_1
evento_1.nombre = "cumpleaños de la artista Carolina Macellaro, ig:@soyelefantevioleta"
evento_1.protagonista = "Carolina Macellaro con nombre artístico 'Elefante Violeta'"
evento_1.lugar = "donde quiera";
evento_1.rubro = "cumpleaños";
// fecha: 27 de enero de 2024
evento_1.fecha = new Date(2024, 0, 27);
// Defino representacion de cartelera
let cartelera = [];
// Agrego a cartelera
cartelera.push(evento_1)
// Hago otras instancias de las clases para tener mejor encapsulamiento y no sobreescribir información

// Otros eventos
// evento_2
const evento_2 = new Show();
evento_2.nombre = "Cumpleaños de mi abuela, Alicia Guillén";
evento_2.protagonista = "Mi abuela";
evento_2.lugar = "Monte Hermoso";
evento_2.rubro = "cumpleaños";
evento_2.fecha = new Date(2024, 0, 28);
cartelera.push(evento_2);
// evento_3
const evento_3 = new Show();
evento_3.nombre = "Mi cumpleaños, Nico Paier";
evento_3.protagonista = "yo";
evento_3.lugar = "A definir";
evento_3.rubro = "cumpleaños";
evento_3.fecha = new Date(2024, 9, 27);
cartelera.push(evento_3);
// evento_4
const evento_4 = new Show();

evento_4.nombre = "Supuestamente fin de bailando 2023";

evento_4.lugar = "America TV";

evento_4.fecha = new Date(2024, 0, 29);

evento_4.rubro = "television";

evento_4.protagonista = "Tinelli, finalistas, jurado publico";

cartelera.push(evento_4);
// Renderizado de los shows a mostrar en cartelera
// Selecciono elementos de la interfaz
const grilla = document.querySelector("#eventos-listado");
// Diccionario con los meses de formato javascript a gregoriano
const meses = {0:'Ene', 1:'Feb', 2:'Mar', 3:'Abr', 4:'May', 5:'Jun', 6:'Jul', 7:'Ago', 8:'Sep', 9:'Oct', 10:'Nov', 11:'Dic'};
/* tiene que ser fuera del bucle y variable para evitar dupplicados */
let cartel;

for (let c in cartelera)
{
  // c es uno de los indices de cartelera, uso indexación para obtener el elemento
  cartel = cartelera[c];
  // Selecciono sección que corresponde al rubro del cartel
  const seccion = document.querySelector("#" + cartel.rubro);
 // Muestro cada uno de los eventos 
  seccion.innerHTML = seccion.innerHTML + '<p class = "evento">' + (cartel.nombre + ", " + cartel.protagonista + " el " + meses[cartel.fecha.getMonth()] + ", " + cartel.fecha.getDate() + " del " + cartel.fecha.getFullYear() + " en " + cartel.lugar + ".</p>");
}
