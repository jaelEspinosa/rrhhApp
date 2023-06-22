import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { TecnicosComponent } from './tecnicos/tecnicos.component';
import { ProcedenciaComponent } from './procedencia/procedencia.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EvaluacionComponent } from './evaluacion/evaluacion.component';
import { ColectivoComponent } from './colectivo/colectivo.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {path:'', component: PagesComponent ,
  
  children: [
    {path:'main', component: MainComponent, data:{titulo:"main"} },
    {path:'usuarios', component: UsuariosComponent, data:{titulo:"Usuarios"} },
    {path:'tecnicos', component: TecnicosComponent, data:{titulo:"Tecnicos"}  },
    {path:'procedencia', component: ProcedenciaComponent, data:{titulo:"Procedencia"}  },
    {path:'experiencia', component: ExperienciaComponent, data:{titulo:"Experiencia"}  },
    {path:'evaluacion', component: EvaluacionComponent, data:{titulo:"Evaluacion"}  },
    {path:'colectivo', component: ColectivoComponent, data:{titulo:"Colectivo"}  },

      // Por defecto
    {path:'**', redirectTo:'main' },
]}
]







@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
