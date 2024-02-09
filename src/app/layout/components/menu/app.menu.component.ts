import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from '../../service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Inicio',
                items: [
                    { label: 'Mi tienda', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
                    { label: 'Tienda pública', icon: 'pi pi-globe'}
                ]
            },
            {
                label: 'Productos',
                items: [
                    { label: 'Lista de productos', icon: 'pi pi-bars', routerLink: ['/products'] },
                    { label: 'Crear nuevo producto', icon: 'pi pi-plus', routerLink: ['/products/new'] },
                    { label: 'Stock', icon: 'pi pi-box', routerLink: ['/products/stock'] },
                    { label: 'Listas de precios', icon: 'pi pi-calculator', routerLink: ['/products/pricelists'] }
                ]
            },
            {
                label: 'Ventas',
                items: [
                    { label: 'Lista de ventas', icon: 'pi pi-bars', routerLink: ['/sales'] },
                    { label: 'Estadísticas', icon: 'pi pi-chart-line', routerLink: ['/sales/statistics'] }
                ]
            },
            {
                label: 'Gastos',
                items: [
                    { label: 'Lista de gastos', icon: 'pi pi-bars', routerLink: ['/expenses'] },
                    { label: 'Crear nuevo gasto', icon: 'pi pi-plus', routerLink: ['/expenses/new'] },
                    { label: 'Estadísticas', icon: 'pi pi-chart-line', routerLink: ['/expenses/statistics'] }
                ]
            }
        ];
    }
}
