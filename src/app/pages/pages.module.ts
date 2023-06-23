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
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../services/api.service';


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
        SharedModule,
        HttpClientModule,
    ],
    providers:[
        ApiService
    ]
})
export class PagesModule { }
