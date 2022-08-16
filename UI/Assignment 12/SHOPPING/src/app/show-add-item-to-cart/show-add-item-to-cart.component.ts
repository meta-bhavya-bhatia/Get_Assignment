import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-show-add-item-to-cart',
  templateUrl: './show-add-item-to-cart.component.html',
  styleUrls: ['./show-add-item-to-cart.component.css']
})
export class ShowAddItemToCartComponent implements OnInit {
  showData: any;
 

  constructor(private service:ServiceService) { }

  ngOnInit() {
    this.service.$sendToShow.subscribe((data:any)=>{
      this.showData = data;
      console.log("show");
      console.log(this.showData)
     
     
  });

    
  }

}
