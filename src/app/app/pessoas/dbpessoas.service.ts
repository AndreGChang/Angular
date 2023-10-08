import { Injectable } from '@angular/core';
import { Pessoa } from './pessoas';

@Injectable({
  providedIn: 'root'
})
export class DbpessoasService {

  lista: Pessoa[] = [];
  id: number = 4;

  constructor() {
    this.lista.push(new Pessoa(1,"Andre",12));
    this.lista.push(new Pessoa(2,"Erick",14));
    this.lista.push(new Pessoa(3,"Roberto",13));
  }

  adicionarPessoa(nome:string, idade:number){
    const novaPessoas = new Pessoa(this.id,nome,idade);
    this.lista.push(novaPessoas);
    this.id++;
  }

  getId(id:number) : Pessoa{
    for(let i = 0; i < this.lista.length; i++){
      if(this.lista[i].id == id){
        return this.lista[i];
      }
    }
    this.id++;
    return new Pessoa(0,"",0);
  }


}
