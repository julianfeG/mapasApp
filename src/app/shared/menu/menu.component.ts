import { Component } from '@angular/core';

interface MenuItem {
  rute: string;
  nombre: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})

export class MenuComponent {
  menuItems: MenuItem[] = [
    {
      rute: '/mapas/fullscreen',
      nombre: 'FullScreen'
    },
    {
      rute: '/mapas/zoom-range',
      nombre: 'ZoomRange'
    },
    {
      rute: '/mapas/marcadores',
      nombre: 'Marcadores'
    },
    {
      rute: '/mapas/propiedades',
      nombre: 'Propiedades'
    },
  ]
}
