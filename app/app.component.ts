import { Component } from '@angular/core';
import { ProductService as PS } from './products/service/product.service';

@Component({
  selector: 'my-app',
  template: `
    <div>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <a class="navbar-brand">{{pageTitle}}</a>
      <ul class="nav navbar-nav">
        <li><a [routerLink]="['/welcome']">Home</a></li>
        <li><a [routerLink]="['/products']">Product List</a></li>
      </ul>
    </div>
  </nav>
    <!--<h1></h1>
    <my-products></my-products>-->
    <div class="container">
      <router-outlet></router-outlet>
    </div>
</div>

  `,
  providers: [ PS ]
})

export class AppComponent  {
  pageTitle : string = 'Product Management';
}





