import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class BdimemoryService {

  lista: Livro[] = [];
  id: number = 4;

  constructor() {

    this.lista.push(new Livro(1,"titulo", "autor"))
    this.lista.push(new Livro(2,"andre", "2"))
    this.lista.push(new Livro(3,"bruh", "5"))

  }

  adicionarLivro(autor:string, titulo:string) :void{
   const novoLivro = new Livro(this.id, titulo,autor);
    this.lista.push(novoLivro);
    this.id++;
  }

  getId(id:number): Livro{
    for(let i =0; i < this.lista.length; i++){
        if(this.lista[i].id == id){
            return this.lista[i];
        }
    }
    this.id++;
    return new Livro(0,"","");
  }


}
