class Pila {
    constructor() {
      this.almacenPila = [];
    }
  
    push(elemento) {
      this.almacenPila.push(elemento);
      return this.almacenPila;
    }
  
    pop() {
      if (this.almacenPila.length === 0) {
        return null;
      }
      return this.almacenPila.pop();
    }
  
    peek() {
      if (this.almacenPila.length === 0) {
        return null;
      }
      return this.almacenPila[this.almacenPila.length - 1];
    }
  
    sizes() {
      return this.almacenPila.length;
    }
  
    print() {
      return this.almacenPila;
    }
  }
  const pilaa = new Pila();
  pilaa.push(1);
  pilaa.push(2);
  pilaa.push(3);
  pilaa.push(4);
  pilaa.push(5);
  pilaa.push(6);
  pilaa.push(7);
  pilaa.push(8);
  pilaa.push(9);
  pilaa.push(10);

  console.log(pilaa.print()); 
  console.log(pilaa.pop()); // 10
  console.log(pilaa.peek());   

    //Comenarios
/*  Clase Cola
La clase Cola sigue el principio de "Primero en entrar, primero en salir" (First In, First Out - FIFO). Aquí están los métodos clave:

Constructor (constructor):
Inicializa un array vacío llamado almacenCola donde se almacenarán los elementos.

Agregar Elemento (enqueue(elemento)):

Añade un elemento al final del array almacenCola.

Devuelve el array actualizado.

Eliminar Elemento (dequeue()):

Elimina y devuelve el primer elemento del array.

Si el array está vacío, devuelve null.

Ver el Primer Elemento (peek()):

Devuelve el primer elemento sin eliminarlo.

Si el array está vacío, devuelve null.

Tamaño (size()):

Devuelve el número de elementos en la cola.

Imprimir (print()):

Devuelve el array completo con todos los elementos.

Verificar si Está Vacía (isEmpty()):

Devuelve true si el array está vacío y false si contiene elementos.*/