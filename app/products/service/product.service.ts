import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { IProduct } from '../../products/product';

@Injectable()
export class ProductService {

    private _privateproductUrl = './app/api/products/products.json';

    constructor( private _http: Http){

    }
    getProducts(): Observable <IProduct[]>{
       return this._http.get(this._privateproductUrl)
        .map((response: Response) => <IProduct[]> response.json())
        .do(data => console.log("ALL DATA" + JSON.stringify(data)))
        .catch(this._errorHandler);
    }
    private _errorHandler(error:Response){
        console.log(error);
        return Observable.throw(error.json().error || "Server ERROR");
    }
}