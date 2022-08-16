import { NgModule, Component } from '@angular/core';

import { CartComponent } from './cart/cart.component';
import { ShowAddItemToCartComponent } from './show-add-item-to-cart/show-add-item-to-cart.component';
import { Routes, RouterModule } from '@angular/router';
import { CardItemComponent } from './card-item/card-item.component';

const route:Routes = [
  { path : 'itemList' , component : CartComponent},
  { path : 'allItem' ,component : CardItemComponent},
  { path : 'cartOrder' , component : ShowAddItemToCartComponent},
  {path :'' , redirectTo:'/allItem',pathMatch:'full'}
]; 

@NgModule({
  
  imports: [
    RouterModule.forRoot(route)
    
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
