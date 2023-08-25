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
// Instancio las clases con objetos para usar
const evento = new Show();
// Con una instancia de la clase show iré agregando y cambiando shows a la grilla
evento.nombre = "Concierto Rod Stewart"
evento.protagonista = "Rod Stewart"
evento.lugar = "Estadio GEBA, Buenos Aires(Capital)";
evento.rubro = "concierto";
// fecha: 4 de octubre de 2023
evento.fecha = new Date(2023, 9, 4);
// Defino representacion de cartelera
cartelera = []
// Agrego a cartelera
 cartelera.append(evento)
// Cambio estado de objeto evento para agregar otros espectaculos
// Selecciono elementos de la interfaz
const grilla = document.querySelector("#eventos-listado");
grilla.append(cartelera[0].rubro + " " + cartelera[0].nombre + " por " + cartelera[0].protagonista + " el " + evento.fecha + " en " + cartelera[0].lugar + ".");
