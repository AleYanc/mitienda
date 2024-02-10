import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductCardComponent } from './product-list/product-card/product-card.component';

import { AccordionModule } from 'primeng/accordion';


@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductListComponent,
    NewProductComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    AccordionModule
  ]
})
export class ProductsModule { }
