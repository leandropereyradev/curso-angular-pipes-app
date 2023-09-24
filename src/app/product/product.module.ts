import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { ProductRoutingModule } from './product-routing.module';
import { BasicsPagesComponent } from './pages/basics-pages/basics-pages.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { OrderComponent } from './pages/order/order.component';

import { ToggleCasePipe } from './pipes/toggle-case.pipe';
import { ToggleBooleanCasePipe } from './pipes/toogle-boolean-case.pipe';
import { CanFlyPipe } from './pipes/can-fly.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';

@NgModule({
  declarations: [
    BasicsPagesComponent,
    CanFlyPipe,
    NumbersPageComponent,
    OrderComponent,
    SortByPipe,
    ToggleBooleanCasePipe,
    ToggleCasePipe,
    UncommonPageComponent,
  ],
  imports: [CommonModule, ProductRoutingModule, PrimeNgModule],
})
export class ProductModule {}
