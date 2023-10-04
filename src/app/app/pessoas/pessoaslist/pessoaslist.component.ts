import { Component } from '@angular/core';
import { Pessoas } from '../pessoas';

@Component({
  selector: 'app-pessoaslist',
  templateUrl: './pessoaslist.component.html',
  styleUrls: ['./pessoaslist.component.scss']
})
export class PessoaslistComponent {
  lista: Pessoas[] = [];
 
  constructor() {
    let pessoa1: Pessoas = new Pessoas();
    pessoa1.nome = "andre"
    pessoa1.idade = 35;

    let pessoa2: Pessoas = new Pessoas();
    pessoa2.nome = "carlos"
    pessoa2.idade = 50;

    let pessoa3: Pessoas = new Pessoas();
    pessoa3.nome = "dale"
    pessoa3.idade = 20;

    let pessoa4: Pessoas = new Pessoas();
    pessoa4.nome = "robert"
    pessoa4.idade = 70;

    let pessoa5: Pessoas = new Pessoas();
    pessoa5.nome = "poggers"
    pessoa5.idade = 107;

    let pessoa6: Pessoas = new Pessoas();
    pessoa6.nome = "lula mosluco"
    pessoa6.idade = 90;

    let pessoa7: Pessoas = new Pessoas();
    pessoa7.nome = "tchongers"
    pessoa7.idade = 25;

    let pessoa8: Pessoas = new Pessoas();
    pessoa8.nome = "rogerio"
    pessoa8.idade = 10;

    let pessoa9: Pessoas = new Pessoas();
    pessoa9.nome = "ok"
    pessoa9.idade = 5;

    let pessoa10: Pessoas = new Pessoas();
    pessoa10.nome = "asd"
    pessoa10.idade = 75;

    this.lista.push(pessoa1);
    this.lista.push(pessoa2);
    this.lista.push(pessoa3);
    this.lista.push(pessoa4);
    this.lista.push(pessoa5);
    this.lista.push(pessoa6);
    this.lista.push(pessoa7);
    this.lista.push(pessoa8);
    this.lista.push(pessoa9);
    this.lista.push(pessoa10);


  }
}
