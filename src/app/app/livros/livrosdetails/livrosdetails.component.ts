import { Pessoas } from './../../pessoas/pessoas';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BdimemoryService } from '../bdimemory.service';
import { Livro } from '../livro';

@Component({
  selector: 'app-livrosdetails',
  templateUrl: './livrosdetails.component.html',
  styleUrls: ['./livrosdetails.component.scss']
})

export class LivrosdetailsComponent implements OnInit{
  roteador = inject(ActivatedRoute);
  bd = inject(BdimemoryService);
  
  @Input() livro: Livro = new Livro(0,"","");

  @Output() retorno = new EventEmitter<Livro>();

  constructor() {
    let id = this.roteador.snapshot.paramMap.get('id');

    if (id) {
      this.livro = this.bd.getId(+id);
    }
  }

  ngOnInit(): void {
      this.livro = Object.assign({}, this.livro);
  }

  salvar(){
    this.retorno.emit(this.livro);
  }


}
