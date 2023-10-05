import { Component } from '@angular/core';
import { Livro } from '../livro';

@Component({
  selector: 'app-livroslist',
  templateUrl: './livroslist.component.html',
  styleUrls: ['./livroslist.component.scss']
})
export class LivroslistComponent {
  lista: Livro[] = [];
  listaString = JSON.stringify(this.lista);

  constructor(){
    this.lista.push(new Livro(1,"dale", "1"))
    this.lista.push(new Livro(2,"dpoggers", "3"))
    this.lista.push(new Livro(3,"andre", "2"))
    this.lista.push(new Livro(4,"bruh", "5"))
    this.lista.push(new Livro(5,"tchongers", "7"))
    this.lista.push(new Livro(6,"blobers", "9"))
    this.lista.push(new Livro(7,"tank", "10"))
    this.lista.push(new Livro(8,"kkk", "4"))

    localStorage.setItem('chaveListaNoLocalStorage', this.listaString);
    console.log('Lista salva no localStorage.');
  }





}
