import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

menuRRHH: any = {
  title: 'RRHH',
  icon: 'nav-icon fa fa-users',
  submenu: [
    {title: 'Usuarios', url:'usuarios'},
    {title: 'Técnicos', url:'tecnicos'},
    {title: 'Procedencia', url:'procedencia'},
    {title: 'Experiencia', url:'experiencia'},
    {title: 'Evaluación', url:'evaluacion'},
    {title: 'Colectivo', url:'colectivo'},
]
}
menuConfig: any = {
  title:'Configuración',
  icon: 'nav-icon fas fa-cogs',
  submenu:[
    {title: 'Log de accesos', url:'log-accesos'},
    {title: 'Log de sistema', url:'log-sistema'},
    {title: 'Log de usuarios', url:'log-usuarios'},
  ]
}



  constructor() { }
}
