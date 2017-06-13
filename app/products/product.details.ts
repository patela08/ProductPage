import { Component } from '@angular/core';
import { IProduct } from './product';

@Component({
    templateUrl: '/app/products/product.details.html'
})
export class productDetails {
    pageTitle:string =  'Product Details';
    product: IProduct
}