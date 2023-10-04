import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent {
  public isUpperCase: boolean = false;
  public orderBy: keyof Hero | '' = '';

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue,
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black,
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'Robbin',
      canFly: false,
      color: Color.green,
    },
    {
      name: 'Spiderman',
      canFly: false,
      color: Color.red,
    },
  ];

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(sortBy: keyof Hero) {
    this.orderBy = sortBy;
  }
}
