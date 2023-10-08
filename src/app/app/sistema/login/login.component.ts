import { Router } from '@angular/router';
import { Usuario } from './../usuario';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  usuario : Usuario = new Usuario();
  verify = false;
  roteador = inject(Router);

  logar(){
    if(this.usuario.login == "admin" && this.usuario.senha == "admin"){
      //libero rota
      this.roteador.navigate(["/admin/pessoas"])
    }else{
      this.verify = true;
      //alert("Usuario ou senha incorretos")
    }
  }
}
