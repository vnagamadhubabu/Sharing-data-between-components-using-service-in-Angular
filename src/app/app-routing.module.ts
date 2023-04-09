import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home1Component } from './home1/home1.component';
import { Home2Component } from './home2/home2.component';

const routes: Routes = [
  {path:'home1',component:Home1Component},
  {path:'home2',component:Home2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
