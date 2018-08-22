import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'; 
import { FormPessoaComponent } from '../form-pessoa/form-pessoa.component';
import { HomeComponent } from '../home/home.component';




const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'pessoa', component: FormPessoaComponent },
]; 

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes, {useHash: true}),
    FormsModule
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, AboutComponent],
  exports: [LayoutComponent]
})
export class UiModule { }
