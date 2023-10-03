import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { BasicsPageComponent } from 'src/app/products/pages/basics-page/basics-page.component';

@Component({
  selector: 'share-menu-bar',
  templateUrl: './menu-bar.component.html',
})
export class MenuBarComponent implements OnInit {
  public menuItems: MenuItem[] = [];

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Pipe de Angular',
        icon: PrimeIcons.PLUS,
        items: [
          {
            label: 'Textos y Fechas',
            icon: PrimeIcons.ALIGN_LEFT,
            routerLink: '/',
          },
          { label: 'Numeros', icon: PrimeIcons.DOLLAR, routerLink: 'numbers' },
          {
            label: 'No comunes',
            icon: PrimeIcons.GLOBE,
            routerLink: 'uncommon',
          },
        ],
      },
      {
        label: 'Pipes personalizados',
        icon: PrimeIcons.CODE,
        items: [{ label: 'Otro elemento', icon: PrimeIcons.COG }],
      },
    ];
  }
}
