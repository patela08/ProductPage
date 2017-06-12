    import { Component } from '@angular/core';
    import { IProduct } from './product';
    import { ProductService } from './service/product.service';

    @Component({
        selector: 'my-products' ,
        templateUrl: 'app/products/product-list-component.html',
        styleUrls: ['app/products/css/product-list-component.css']
    })

    export class ProductListComponet{
        pageTitle: String = "Product List";
        showImg: boolean = false;
        listFilter: String = '';
        products: IProduct[];
        errorMessange : string;
        
        constructor(private _productService : ProductService){
        }
        toggleImg(): void{
            this.showImg = !this.showImg;
        };
        ngOnInit(): void{
           this._productService.getProducts()
                .subscribe(
                    products => this.products = products,
                    error => this.errorMessange = <any>error
                );
        };
         onRatingClicked(message: String): void {
            console.log("Star having Rating of", message +" Clicked" );
        }; 
    }
