import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { QuienSoyComponent } from './quien-soy/quien-soy.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {path:'login' , component: LoginComponent},
  { path: 'registro', component: RegistroComponent},
  { path:'quiensoy', component: QuienSoyComponent},
  { path:'', component: HomeComponent},
  {path:'**', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
