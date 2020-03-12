import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {InovationComponent} from './inovation/inovation.component';
import {InstitutionComponent} from './institution/institution.component';
import {EntrepreneurshipComponent} from './entrepreneurship/entrepreneurship.component';
import {PidComponent} from './pid/pid.component';
import { from } from 'rxjs';
const routes: Routes = [{path:'', component: InstitutionComponent}, {path:'inovation', component: InovationComponent},
{path:'emp', component: EntrepreneurshipComponent}, {path: 'pi', component: PidComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
