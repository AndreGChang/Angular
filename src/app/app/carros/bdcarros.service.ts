import { Injectable } from '@angular/core';
import { Carro } from './carro';

@Injectable({
  providedIn: 'root'
})
export class BdcarrosService {

  lista: Carro[] = [];
  id: number = 4;
  constructor() {

    this.lista.push(new Carro(1, "Civic", 2003));
    this.lista.push(new Carro(2, "Fusca", 1990));
    this.lista.push(new Carro(3, "Camaro", 2015));
  }

  adicionarCarro(nome:string, ano:number ) {
    const novoCarro = new Carro(this.id, nome,ano);
    this.lista.push(novoCarro);
    this.id++;
  }

  getId(id: number): Carro {
    for (let i = 0; i < this.lista.length; i++) {
      if (this.lista[i].id == id) {
        return this.lista[i]
      }
    }
    this.id++;
    return new Carro(0, "", 0);
  }

}
