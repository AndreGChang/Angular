import { Component, inject } from '@angular/core';
import { Livro } from '../livro';
import { BdimemoryService } from '../bdimemory.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-livroslist',
  templateUrl: './livroslist.component.html',
  styleUrls: ['./livroslist.component.scss']
})
export class LivroslistComponent {

  modalService = inject(NgbModal);
  bd = inject(BdimemoryService);

  livroSelecionado!: Livro;
  indiceSelect!: number;

  lista: Livro[] = [];

  constructor(){
    this.lista = this.bd.lista;
  }

  abrirModal(content : any){
    this.livroSelecionado = new Livro(0,"","");
    this.modalService.open(content, {size:"lg"});
  }

  abrirModalEditar(editar : any, livro:any, indice: number){
    this.indiceSelect = indice;
    this.livroSelecionado = livro;
    this.modalService.open(editar, {size:"lg"});
  }

  addLista(livro : Livro){

    if(livro.id > 0){
      this.lista[this.indiceSelect] = livro;
    }else{
      this.adivionarLivro(livro.autor,livro.titulo);
      //this.lista.push(livro);
    }
    this.modalService.dismissAll();

  }

  fecharModal(){
    this.modalService.dismissAll();
  }

  adivionarLivro(autor:string, titulo:string){
    this.bd.adicionarLivro(autor,titulo);
  }

}
