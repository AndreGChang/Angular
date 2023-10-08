import { Component, inject } from '@angular/core';
import { Carro } from '../carro';
import { BdcarrosService } from '../bdcarros.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-carroslist',
  templateUrl: './carroslist.component.html',
  styleUrls: ['./carroslist.component.scss']
})
export class CarroslistComponent {
  lista: Carro[] = [];

  bd = inject(BdcarrosService);
  modalService = inject(NgbModal);

  carroSelecionado!: Carro;
  indiciSelect!: number;

  constructor() {
    this.lista = this.bd.lista;
  }

  abrirModal(content: any) {
    this.carroSelecionado = new Carro(0, "", 0);
    this.modalService.open(content, { size: "lg" });
  }

  abrirModalEditar(content: any, carro: any, indice: number) {
    this.indiciSelect = indice;
    this.carroSelecionado = carro;
    this.modalService.open(content, { size: "lg" });
  }

  addLista(carro: Carro) {
    if (carro.id > 0) {
      this.lista[this.indiciSelect] = carro;
    } else {
      this.adicionarCarro(carro.nome, carro.ano);
    }
    this.modalService.dismissAll();
  }

  fecharModal() {
    this.modalService.dismissAll();
  }

  adicionarCarro(nome: string, ano: number) {
    this.bd.adicionarCarro(nome, ano);
  }

}
