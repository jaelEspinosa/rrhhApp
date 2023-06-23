import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'main',
  loadChildren: ()=> import('./pages/pages.module').then(m => m.PagesModule)
},
{path:'auth',
  loadChildren: ()=> import('./auth/auth.module').then(m => m.AuthModule)
},
{
path:'', redirectTo:'main', pathMatch:'full'
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
