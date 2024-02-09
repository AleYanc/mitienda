import { Component } from '@angular/core';
import { Product } from '../../../api/interfaces/product/product.interface';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrl: './dashboard-container.component.scss'
})
export class DashboardContainerComponent {
  products: Product[] = [
    
  ]
}
