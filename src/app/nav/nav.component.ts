import {Component} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  items: MenuItem[];

  constructor() {
    this.items = [
      {label: 'Inicio', routerLink: 'home'},
      {label: 'Usuarios', routerLink: 'users'},
      {label: 'clases', routerLink: 'clases'}
    ]
  }
}
