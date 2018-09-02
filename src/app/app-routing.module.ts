import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DailyscrumComponent } from './components/dailyscrum/dailyscrum.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'dailyscrum', component: DailyscrumComponent},
  {path:'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
