import { Component, inject } from '@angular/core';
import { Pessoa } from '../pessoas';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DbpessoasService } from '../dbpessoas.service';

@Component({
  selector: 'app-pessoaslist',
  templateUrl: './pessoaslist.component.html',
  styleUrls: ['./pessoaslist.component.scss']
})
export class PessoaslistComponent {
  lista: Pessoa[] = [];

  //injetamos para usar funcionalidades da modal do bootstrap
  modalService = inject(NgbModal);
  //minha service que contem os dados (normalmente faz conexao com o back-end)
  bd = inject(DbpessoasService);

  //usados para a edicao pegar o objeto selecionado e o indice dele;
  pessoaSelecionada!: Pessoa;
  indiceSelect!: number;

  constructor() {
    this.lista = this.bd.lista;
    console.log(this.lista);
  }

  abrirModal(content : any){
    this.pessoaSelecionada =  new Pessoa(0, "", 0);
    this.modalService.open(content, {size:"lg"});
  }

  abrirModalEditar(content : any, pessoa: any , indice : number){
    this.indiceSelect = indice;
    this.pessoaSelecionada = pessoa;
    this.modalService.open(content, {size:"lg"});
  }

  addLista(pessoa : Pessoa){
    if(pessoa.id > 0){
        this.lista[this.indiceSelect] = pessoa;
    }else{
      this.adicionarPessoa(pessoa.nome, pessoa.idade);
    }

    this.modalService.dismissAll();
  }

  fecharModal(){
    this.modalService.dismissAll();
  }

  adicionarPessoa(nome:string, idade:number){
    this.bd.adicionarPessoa(nome,idade);
  }
}
