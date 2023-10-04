import { Component } from '@angular/core';
import { Carro } from '../carro';

@Component({
  selector: 'app-carroslist',
  templateUrl: './carroslist.component.html',
  styleUrls: ['./carroslist.component.scss']
})
export class CarroslistComponent {
  lista: Carro[] = [];

  constructor(){
    let carro1: Carro = new Carro();
    carro1.nome = 'gol'
    carro1.ano = 2003

    let carro2: Carro = new Carro();
    carro2.nome = 'civic'
    carro2.ano = 2012


    this.lista.push(carro1)
    this.lista.push(carro2)
  }
}
