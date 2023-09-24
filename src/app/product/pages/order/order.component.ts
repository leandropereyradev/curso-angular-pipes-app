import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'product-order',
  templateUrl: './order.component.html',
  styles: [],
})
export class OrderComponent {
  public isUpperCase: boolean = false;
  public orderBy?: keyof Hero;

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: 'azul',
    },
    {
      name: 'Batman',
      canFly: false,
      color: 'negro',
    },
    {
      name: 'Linterna Verde',
      canFly: true,
      color: 'verde',
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: 'rojo',
    },
    {
      name: 'Robin',
      canFly: false,
      color: 'rojo',
    },
  ];

  toogleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value: keyof Hero) {
    this.orderBy = value;
  }
}
