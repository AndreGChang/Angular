import { Component, EventEmitter, Output, inject, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pessoa } from '../pessoas';
import { DbpessoasService } from '../dbpessoas.service';

@Component({
  selector: 'app-pessoasdetails',
  templateUrl: './pessoasdetails.component.html',
  styleUrls: ['./pessoasdetails.component.scss']
})
export class PessoasdetailsComponent {
  route = inject(ActivatedRoute);
  db = inject(DbpessoasService);

  @Input() pessoa = new Pessoa(0,"",0);

  @Output() retorno =  new EventEmitter<Pessoa>();


  constructor(){
    let id = this.route.snapshot.paramMap.get("id");

    if(id){
      this.pessoa = this.db.getId(+id);
    }

  }

  ngOnInit(): void{
    this.pessoa = Object.assign({}, this.pessoa);
  }

  salvar(){
    this.retorno.emit(this.pessoa);
  }

}
