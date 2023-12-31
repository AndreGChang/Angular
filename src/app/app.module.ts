import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './app/layout/index/index.component';
import { CarroslistComponent } from './app/carros/carroslist/carroslist.component';
import { FormsModule } from '@angular/forms';
import { PessoaslistComponent } from './app/pessoas/pessoaslist/pessoaslist.component';
import { MenusuperiorComponent } from './app/layout/menusuperior/menusuperior.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CarroslistComponent,
    PessoaslistComponent,
    MenusuperiorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
