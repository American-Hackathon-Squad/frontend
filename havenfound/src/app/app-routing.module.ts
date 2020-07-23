import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShelterListComponent } from './shelterListComponent';
 
const routes: Routes = [
  { path: 'shelters', component: ShelterListComponent }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
