import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CVComponent } from './cv/cv.component';


const routes: Routes = [
  {path: '', component: CVComponent},
  {path: 'CV', component: CVComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
