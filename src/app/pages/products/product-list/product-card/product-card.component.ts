import { Component, Input } from '@angular/core';
import { Product } from '../../../../api/interfaces/product/product.interface';

@Component({
  selector: 'app-product-list',
  template: `
    
  `
})
export class ProductCardComponent {
  @Input()
  product!: Product
}
