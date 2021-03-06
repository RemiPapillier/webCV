import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { FormationComponent } from './formation/formation.component';
import { CompetenceComponent } from './competence/competence.component';
import { ProposComponent } from './propos/propos.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'experiences', component: ExperienceComponent },
  { path: 'formations', component: FormationComponent },
  { path: 'competences', component: CompetenceComponent },
  { path: 'apropos', component: ProposComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ExperienceComponent,
    FormationComponent,
    CompetenceComponent,
    ProposComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule
  ],
  schemas: [ 
    NO_ERRORS_SCHEMA 
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
 }
