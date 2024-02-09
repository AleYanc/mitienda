import { CategorySimple } from "../category/category-simple.interface";
import { ProductCode } from "./product-code.interface";
import { StockSimple } from "../stock/stock-simple.interface";

export interface Product {
    id: number
    productCode: ProductCode
    name: string
    description: string
    imagesUrl: string
    widthCM: number
    heightCM: number
    depthCM: number
    weightGs: number
    active: boolean
    stock: StockSimple
    category: CategorySimple
}