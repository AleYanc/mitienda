import { AppLayoutComponent } from "../layout/app.layout.component";

export const mainRoutes = {
    path: '',
    component: AppLayoutComponent,
    children: [
        { 
            path: '',
            loadChildren: () => import('../pages/my-store/my-store.module').then(m => m.MyStoreModule)
        }
    ]
}