import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config as apiconfig} from '../api.config';
import { Product } from '../interfaces/product/product.interface';
import { PagedResponse } from '../interfaces/pagination/paged-response.interface';

@Injectable({providedIn: 'root'})
export class ProductsService {
    constructor(private http: HttpClient) { }

    private _productList: Product[] = []

    get productList(): Product[] {
        return [...this._productList]
    }

    getProducts() {
        this.http.get<PagedResponse<Product[]>>(`${apiconfig.baseUrl}/Products/`)
            .subscribe(r => {
                console.log(r.data)
                this._productList = r.data
            })
    }
}