import { Component, inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ElementRef } from '@angular/core';
import { LivroslistComponent } from '../livroslist/livroslist.component';
import { Livro } from '../livro';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-livrosdetails',
  templateUrl: './livrosdetails.component.html',
  styleUrls: ['./livrosdetails.component.scss']
})

export class LivrosdetailsComponent {

  id!: number;
  autor!: string;
  titulo!: string;
  a!: LivroslistComponent;
  i!: number;
  roteador = inject(ActivatedRoute)

  listaString = localStorage.getItem('chaveListaNoLocalStorage');

  constructor() {
    let id = this.roteador.snapshot.paramMap.get('id');

    if (id) {

    }

    if (this.listaString) {
      // Converte a string JSON de volta para uma lista (array) de JavaScript
      const listaRecuperada: string[] = JSON.parse(this.listaString);
      console.log('Lista recuperada do localStorage:', listaRecuperada);
    } else {
      console.log('Nenhuma lista encontrada no localStorage para a chave fornecida.');
    }

  }


  dale():void{
    this.a.lista.forEach(e=>{
      console.log(e.id);
      console.log(e.autor);
    })
  }




}
