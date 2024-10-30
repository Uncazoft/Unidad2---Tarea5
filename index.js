class Cola {
    constructor() {
      this.almacenCola = [];
    }
  
    enqueue(elemento) {
      this.almacenCola.push(elemento);
      return this.almacenCola;
    }
  
    dequeue() {
      if (this.almacenCola.length === 0) {
        return null;
      }
      return this.almacenCola.shift();
    }
  
    peek() {
      if (this.almacenCola.length === 0) {
        return null;
      }
      return this.almacenCola[0];
    }
  
    sizes() {
      return this.almacenCola.length;
    }
  
    print() {
      return this.almacenCola;
    }
  
    isEmpty() {
      return this.almacenCola.length === 0;
    }
  }


  const Colaa = new Cola();
  Colaa.enqueue(1);
  Colaa.enqueue(2);
  Colaa.enqueue(3);
  Colaa.enqueue(4);
  Colaa.enqueue(5);
  Colaa.enqueue(6);
  Colaa.enqueue(7);
  Colaa.enqueue(8);
  Colaa.enqueue(9);
  Colaa.enqueue(10);

  console.log(Colaa.print()); 
  console.log(Colaa.dequeue()); 
  console.log(Colaa.peek()); 
    

  //Comenarios
/*  Clase Pila la clase Pila sigue el principio de "Último en entrar, primero en salir" (Last In, First Out - LIFO). Aquí están los métodos clave:

Constructor (constructor):

Inicializa un array vacío llamado almacenPila donde se almacenarán los elementos.

Agregar Elemento (push(elemento)):

Añade un elemento al final del array almacenPila.

Devuelve el array actualizado.

Eliminar Elemento (pop()):

Elimina y devuelve el último elemento del array.

Si el array está vacío, devuelve null.

Ver el Último Elemento (peek()):

Devuelve el último elemento sin eliminarlo.

Si el array está vacío, devuelve null.

Tamaño (size()):

Devuelve el número de elementos en la pila.

Imprimir (print()):

Devuelve el array completo con todos los elementos.*/