import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CVComponent } from './cv/cv.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cv', component: CVComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
