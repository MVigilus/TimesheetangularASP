import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PublicComponent } from './public.component';

const routes: Routes = [
  {path:'',component:PublicComponent,children:[
    {path:'',redirectTo:'home'},
    {path:'home',component:DashboardComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
