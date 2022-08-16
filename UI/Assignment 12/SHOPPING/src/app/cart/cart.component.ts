import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  allItem: any;
  counter:number;
  addItemList=[];
  constructor( private service : ServiceService) {this.counter=0 }
               
  ngOnInit() {
    this.service.$addItem.subscribe((data:any)=>{
      this.allItem = data;
     
      this.sendData(this.allItem)
  });

 
 
}

sendData(item){

  this.counter++;
  this.addItemList.push(item);

 


}

getOrderData(){
  this.service.sendDataToServiceForShow(this.addItemList);
}
   
}
