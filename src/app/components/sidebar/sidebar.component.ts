import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';


declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Inicio',   class: '' },
    { path: '/user-profile', title: 'Mi perfil',  class: '' },
    { path: '/faq', title: 'Preguntas frecuentes',   class: '' },
    { path: '/home', title: 'Novedades',  class: '' },
    { path: '/stores', title: 'Tienda de premios',  class: '' },
    { path: '/store', title: 'Tienda de premios',  class: '' },
    { path: '/searcher', title: 'Búsqueda',  class: '' },
    { path: '/contest', title: 'Concurso',  class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
