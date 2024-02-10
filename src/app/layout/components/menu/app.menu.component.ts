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
                    { 
                        label: 'Mi tienda', 
                        icon: 'pi pi-fw pi-home', 
                        items: [ 
                            { label: 'Panel de control', icon: 'pi pi-desktop', routerLink: ['/panel-de-control'] },
                            { label: 'Diseño', icon: 'pi pi-pencil' },
                        ] 
                    },
                    { label: 'Tienda pública', icon: 'pi pi-globe'},
                    {
                        label: 'Centro de ayuda', icon: 'pi pi-question-circle',
                        items: [
                            { label: 'Tutoriales', icon: 'pi pi-book' },
                            { label: 'Contactar soporte', icon: 'pi pi-comments' },
                            { label: 'Enviar sugerencia', icon: 'pi pi-info-circle' }
                        ]
                    }
                ]
            },
            {
                label: 'Productos',
                items: [
                    { label: 'Lista de productos', icon: 'pi pi-bars', routerLink: ['/products'] },
                    { label: 'Crear nuevo producto', icon: 'pi pi-plus', routerLink: ['/products/new'] },
                    { label: 'Stock', icon: 'pi pi-box', routerLink: ['/products/stock'] },
                    { label: 'Listas de precios', icon: 'pi pi-calculator', routerLink: ['/products/pricelists'] },
                ]
            },
            {
                label: 'Ventas',
                items: [
                    { label: 'Lista de ventas', icon: 'pi pi-bars', routerLink: ['/sales'] },
                    { label: 'Estadísticas', icon: 'pi pi-chart-line', routerLink: ['/sales/statistics'] },
                    { label: 'Consultas', icon: 'pi pi-comment' },
                    { label: 'Clientes', icon: 'pi pi-users' },
                    { 
                        label: 'Gestión', 
                        icon: 'pi pi-book',
                        items: [
                            { label: 'Métodos de pago', icon: 'pi pi-credit-card' },
                            { label: 'Métodos de envío', icon: 'pi pi-truck' },
                            {
                                label: 'Crear promociones', icon: 'pi pi-dollar',
                                items: [
                                    { label: 'Oferta', icon: 'pi pi-info-circle' },
                                    { label: 'Código de descuento', icon: 'pi pi-info-circle' }
                                ]
                            }
                        ]
                    }
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
