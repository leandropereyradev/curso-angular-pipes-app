import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { BasicsPagesComponent } from './pages/basics-pages/basics-pages.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';

@NgModule({
  declarations: [BasicsPagesComponent, NumbersPageComponent, UncommonPageComponent],
  imports: [CommonModule, ProductRoutingModule],
})
export class ProductModule {}
