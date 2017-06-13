import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent }  from './app.component';
import { ProductListComponet } from './products/product-list-component';  
import { ProductFilterPipe } from './products/product-filter';
import { productDetails } from './products/product.details';
import { StarComponent } from './Shared Components/star.component';
import { welcomeComponent } from './home/welcome.component';
 

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'products' , component: ProductListComponet},
      {path: 'product/:id' , component: productDetails},
      {path: 'welcome' , component: welcomeComponent},
      {path: '', redirectTo:'welcome' , pathMatch:'full'},
      {path: '**', redirectTo: 'welcome' , pathMatch: 'full'}
    ])
  ],
  declarations: [
    AppComponent,
    ProductListComponet,
    ProductFilterPipe,
    productDetails,
    StarComponent,
    welcomeComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
