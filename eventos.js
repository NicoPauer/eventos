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
  constructor(que, donde)
  {
  }
}

class Cartelera
{
  constructor(show)
  {
  }
}

// Instancio las clases con objetos para usar
//const show_1 = new Show("", );
//const show_2 = new Show("", );
//const cartelera = new Cartelera(show_1);
//cartelera.agregar(show_2);
// Selecciono elementos de la interfaz
const grilla = document.querySelector("#eventos-listado");
