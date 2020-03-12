import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from  '@angular/material/card';
import { InstitutionComponent } from './institution/institution.component';
import { InovationComponent } from './inovation/inovation.component';
import { EntrepreneurshipComponent } from './entrepreneurship/entrepreneurship.component';
import { PidComponent } from './pid/pid.component';
import { NewbusinesComponent } from './newbusines/newbusines.component';
import { TecnologyComponent } from './tecnology/tecnology.component';
import { NewsComponent } from './news/news.component';
import { EdictsComponent } from './edicts/edicts.component';
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    InstitutionComponent,
    InovationComponent,
    EntrepreneurshipComponent,
    InovationComponent,
    PidComponent,
    NewbusinesComponent,
    TecnologyComponent,
    NewsComponent,
    EdictsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
