import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class BdimemoryService {

  lista: Livro[] = [];
  id: number = 0;
  
  constructor() {
    //this.lista.push(new Livro(this.adicionarID(this.id),"dale", "1"))
    // this.lista.push(new Livro(2,"dpoggers", "3"))
    // this.lista.push(new Livro(3,"andre", "2"))
    // this.lista.push(new Livro(4,"bruh", "5"))
    // this.lista.push(new Livro(5,"tchongers", "7"))
    // this.lista.push(new Livro(6,"blobers", "9"))
    // this.lista.push(new Livro(7,"tank", "10"))
    // this.lista.push(new Livro(8,"kkk", "4"))
  }

  adicionarID(i:number) :number{
   return this.id +=1;
  }

  getId(id:number): Livro{
    for(let i =0; i < this.lista.length; i++){
        if(this.lista[i].id == id){
            return this.lista[i];
        }
    }
    return new Livro(this.adicionarID(this.id),"","");
  }


}
