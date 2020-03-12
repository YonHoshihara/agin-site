import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {InovationComponent} from './inovation/inovation.component';
import {InstitutionComponent} from './institution/institution.component';
const routes: Routes = [{path:'', component: InstitutionComponent}, {path:'inovation', component: InovationComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
