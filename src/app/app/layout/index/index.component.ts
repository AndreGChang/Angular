import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  num1: number = 0;
  num2: number = 0;

  lista: number[] = [];

  constructor(){
    this.lista.push(1);
    this.lista.push(2);
    this.lista.push(3);
  }

  carregando: boolean = true;

  alerta(){
    alert("dale");
  }
}
