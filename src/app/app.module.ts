import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { FormPessoaComponent } from './form-pessoa/form-pessoa.component';
import { FormsModule,ReactiveFormsModule   } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapaComponent } from './mapa/mapa.component';
import { PessoaViewComponent } from './form-pessoa/pessoa-view/pessoa-view.component';

import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
    FormPessoaComponent,
    HomeComponent,
    MapaComponent,
    PessoaViewComponent
  ],
  imports: [
    
    SweetAlert2Module.forRoot(),
    BrowserModule,
    UiModule,
    FormsModule,
    ReactiveFormsModule , BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
