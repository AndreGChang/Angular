import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { Carro } from '../carro';
import { ActivatedRoute } from '@angular/router';
import { BdcarrosService } from '../bdcarros.service';

@Component({
  selector: 'app-carrosdetails',
  templateUrl: './carrosdetails.component.html',
  styleUrls: ['./carrosdetails.component.scss']
})

export class CarrosdetailsComponent implements OnInit{
  roteador = inject(ActivatedRoute);
  bd = inject(BdcarrosService);

  @Output() retorno = new EventEmitter<Carro>();

  @Input() carro: Carro= new Carro(0,"",0);

  constructor(){
    let id = this.roteador.snapshot.paramMap.get("id");

    if(id){
      this.carro = this.bd.getId(+id);
    }
  }
ngOnInit(): void {
    this.carro = Object.assign({}, this.carro);
}

salvar(){
  this.retorno.emit(this.carro);
}

}
