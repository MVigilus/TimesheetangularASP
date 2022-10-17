import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationModule } from './authentication/authentication.module';
import { AdminGuard } from './guards/admin-guard.guard';
import { PublicGuard } from './guards/public-guard.guard';

const routes: Routes = [
  {path:'',redirectTo:'auth',pathMatch:'full'},
  {path:'auth',loadChildren:()=>import('./authentication/authentication.module').then(auth=>auth.AuthenticationModule)},
  {path:'admin',loadChildren:()=>import('./administrator/administrator.module').then(admin=>admin.AdministratorModule),canActivate:[AdminGuard]},
  {path:'public',loadChildren:()=>import('./public/public.module').then(publica=>publica.PublicModule),canActivate:[PublicGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
