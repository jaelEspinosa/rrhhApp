import { Component } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {

menuRRHH!: any;
menuConfig!: any;

constructor(private sidebarService: SidebarService){
  this.menuRRHH = sidebarService.menuRRHH;
  this.menuConfig = sidebarService.menuConfig;

}

}
