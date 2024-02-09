import { Component, OnInit } from '@angular/core';
import { ProductsService } from './api/services/products.service';
import { Product } from './api/interfaces/product/product.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private productsService: ProductsService) {}
  public products: Product[] = []

  ngOnInit(): void {
    this.productsService.getProducts()
  }
}
