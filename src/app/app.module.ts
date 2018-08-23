import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { FormPessoaComponent } from './form-pessoa/form-pessoa.component';
import { FormsModule,ReactiveFormsModule   } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapaComponent } from './mapa/mapa.component';

@NgModule({
  declarations: [
    AppComponent,
    FormPessoaComponent,
    HomeComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    UiModule,
    FormsModule,
    ReactiveFormsModule , BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
