import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';

@Component({
    templateUrl: '/app/products/product.details.html'
})
export class productDetails {
    pageTitle:string =  'Product Details';
    product: IProduct;

    constructor(private _route: ActivatedRoute , private _router: Router){
        
    }
    OnInit(): void {
        let id = +this._route.snapshot.params['id'];
        console.log(id);
    }
    onBack () : void{
        this._router.navigate(['/products']);
    }
}