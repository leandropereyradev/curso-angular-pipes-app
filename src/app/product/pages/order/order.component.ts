import { Component } from '@angular/core';

@Component({
  selector: 'product-order',
  templateUrl: './order.component.html',
  styles: [],
})
export class OrderComponent {
  public isUpperCase: boolean = false;

  toogleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }
}
