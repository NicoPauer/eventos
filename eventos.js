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
evento_1.nombre = "Rod Stewart En Vivo"
evento_1.protagonista = "Rod Stewart"
evento_1.lugar = "Estadio GEBA, Buenos Aires (Capital)";
evento_1.rubro = "conciertos";
// fecha: 4 de octubre de 2023
evento_1.fecha = new Date(2023, 9, 04);
// Defino representacion de cartelera
let cartelera = [];
// Agrego a cartelera
cartelera.push(evento_1)
// Hago otras instancias de las clases para tener mejor encapsulamiento y no sobreescribir información

// Otros eventos
// evento_2
const evento_2 = new Show();
evento_2.nombre = "Taylor Swift The Eras Tour";
evento_2.protagonista = "Taylor Swift";
evento_2.lugar = "Estadio River, Buenos Aires (Capital)";
evento_2.rubro = "conciertos";
evento_2.fecha = new Date(2023, 10, 09);
cartelera.push(evento_2);
// evento_3
const evento_3 = new Show();
evento_3.nombre = "Vivo de Instagram sobre autismo Ian Moche con Flor Alifano";
evento_3.protagonista = "Ian Moche";
evento_3.lugar = "Instagram @ianmoche a las 18:00hs";
evento_3.rubro = "charlas";
evento_3.fecha = new Date(2023, 8, 18);
cartelera.push(evento_3);
// evento_4
/*const evento_4 = new Show();
evento_4.nombre = "Bailando por un sueño 2023";
evento_4.protagonista = "Marcelo Tinelli, Angel De Brito, Pampita y gran elenco";
evento_4.lugar = "Canal de televisión America TV";
evento_4.fecha = new Date(2023, 8, 04);
evento_4.rubro = "television";
cartelera.push(evento_4);*/
// evento_5
const evento_5 = new Show();
evento_5.nombre = "Debate presidencial Argentina";
evento_5.protagonista = "Candidatos a presidentes";
evento_5.lugar = "Canales de televisión TN y Trece TV desde la Universidad Nacional de Santiago del Estero a las 21:30hs";
evento_5.rubro = "television";
evento_5.fecha = new Date(2023, 9, 01);
cartelera.push(evento_5);
// evento_6
/*const evento_6 = new Show();
evento_6.nombre = "CONCIERTO DE ORQUESTAS ESCUELAS";
evento_6.lugar = "Teatro municipal Bahía Blanca, Sala Mayor";
evento_6.fecha = new Date(2023, 8, 6);
evento_6.rubro = "teatro";
cartelera.push(evento_6);
// evento_7
const evento_7 = new Show();
evento_7.nombre = "Terapia, comedía en tres sesiones y un diagnostico";
evento_7.lugar = "Teatro municipal Bahía Blanca, Sala Escenario";
evento_7.fecha = new Date(2023, 8, 8);
evento_7.rubro = "teatro";
cartelera.push(evento_7);
// evento_8
const evento_8 = new Show();
evento_8.rubro = "teatro";
// evento_9
const evento_9 = new Show();
// evento_10
const evento_10 = new Show(); 
evento_10.nombre = "Inter Miami vs. LAFC";
evento_10.lugar = "TyCsports desde estadio Banc of California Stadium(BMO) a las 23:00hs";
evento_10.protagonista = "Messi";
evento_10.rubro = "deportes";
evento_10.fecha = new Date(2023, 8, 3);
cartelera.push(evento_10);*/

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
