import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AppComponent}  from './app.component';
import { ProductListComponet } from './products/product-list-component';  
import { ProductFilterPipe } from './products/product-filter';
import { StarComponent } from './Shared Components/star.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    ProductListComponet,
    ProductFilterPipe,
    StarComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
