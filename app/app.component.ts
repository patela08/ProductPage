import { Component } from '@angular/core';
import { ProductService as PS } from './products/service/product.service';

@Component({
  selector: 'my-app',
  template: `
            <div>
              <h1>{{pageTitle}}</h1>
              <my-products></my-products>
            </div>
  `,
  providers: [ PS ]
})

export class AppComponent  {
  pageTitle : string = 'Product Management';
}





