import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'share-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  public menuItems: MenuItem[] = [];

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Pipe de Angular',
        icon: PrimeIcons.PLUS,
        items: [
          { label: 'Textos y Fechas', icon: PrimeIcons.ALIGN_LEFT },
          { label: 'Numeros', icon: PrimeIcons.DOLLAR },
          { label: 'No comunes', icon: PrimeIcons.GLOBE },
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
