import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './app/layout/index/index.component';
import { CarroslistComponent } from './app/carros/carroslist/carroslist.component';
import { FormsModule } from '@angular/forms';
import { PessoaslistComponent } from './app/pessoas/pessoaslist/pessoaslist.component';
import { FooterComponent } from './app/layout/footer/footer.component';
import { PessoasdetailsComponent } from './app/pessoas/pessoasdetails/pessoasdetails.component';
import { HeaderComponent } from './app/layout/header/header.component';
import { LoginComponent } from './app/sistema/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LivroslistComponent } from './app/livros/livroslist/livroslist.component';
import { LivrosdetailsComponent } from './app/livros/livrosdetails/livrosdetails.component';
import { BdimemoryService } from './app/livros/bdimemory.service';
import { CarrosdetailsComponent } from './app/carros/carrosdetails/carrosdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CarroslistComponent,
    PessoaslistComponent,
    FooterComponent,
    PessoasdetailsComponent,
    HeaderComponent,
    LoginComponent,
    LivroslistComponent,
    LivrosdetailsComponent,
    CarrosdetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    BdimemoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
