import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import {Item} from 'src/model/item'
import { AppComponent } from './app.component';
import { CardItemComponent } from 'src/app/card-item/card-item.component';


import { ServiceService } from './service.service';
import { CartComponent } from './cart/cart.component';
import { ShowAddItemToCartComponent } from './show-add-item-to-cart/show-add-item-to-cart.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ItemComponent } from './item/item.component';



@NgModule({
 
  declarations: [
    AppComponent,
    CardItemComponent,
    CartComponent,
    ShowAddItemToCartComponent,
    ItemComponent
   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    HttpClientModule,
    AppRoutingModule,
    
],
    
   
  
  providers: [Item,ServiceService],
  bootstrap: [AppComponent,CardItemComponent]
})
export class AppModule { }
