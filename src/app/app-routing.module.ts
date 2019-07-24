import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { FormationComponent } from './formation/formation.component';
import { CompetenceComponent } from './competence/competence.component';
import { ProposComponent } from './propos/propos.component';


const routes: Routes = [
  //{ path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'experiences', component: ExperienceComponent },
  { path: 'formations', component: FormationComponent },
  { path: 'competences', component: CompetenceComponent },
  { path: 'apropos', component: ProposComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }