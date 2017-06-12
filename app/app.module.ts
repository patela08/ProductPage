import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {AppComponent}  from './app.component';
import { ProductListComponet } from './products/product-list-component';  
import { ProductFilterPipe } from './products/product-filter';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ProductListComponet,
    ProductFilterPipe
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
