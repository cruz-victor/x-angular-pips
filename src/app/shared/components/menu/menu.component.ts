import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'share-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public menuItems:MenuItem[]= [];

  ngOnInit(): void {
    this.menuItems=[
      {label:'New', icon:PrimeIcons.PLUS},
      {label:'Open', icon:PrimeIcons.DOWNLOAD},
      {label:'Undo', icon:PrimeIcons.REFRESH}
    ];
  }


}
