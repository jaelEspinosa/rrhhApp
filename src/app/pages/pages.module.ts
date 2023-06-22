import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ColectivoComponent } from './colectivo/colectivo.component';
import { EvaluacionComponent } from './evaluacion/evaluacion.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { ProcedenciaComponent } from './procedencia/procedencia.component';
import { TecnicosComponent } from './tecnicos/tecnicos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { MainComponent } from './main/main.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from "../shared/shared.module";


@NgModule({
    declarations: [
        ColectivoComponent,
        EvaluacionComponent,
        ExperienciaComponent,
        ProcedenciaComponent,
        TecnicosComponent,
        UsuariosComponent,
        MainComponent,
        PagesComponent
    ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        SharedModule
    ]
})
export class PagesModule { }
