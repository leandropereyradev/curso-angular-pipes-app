import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-pages',
  templateUrl: './basics-pages.component.html',
  styleUrls: ['./basics-pages.component.css'],
})
export class BasicsPagesComponent {
  public nameLower: string = 'leandro';
  public nameUpper: string = 'LEANDRO';
  public fullName: string = 'LeAndrO PereYra';
}
