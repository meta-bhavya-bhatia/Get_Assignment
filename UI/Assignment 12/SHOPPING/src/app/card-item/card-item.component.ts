import { Component, OnInit } from '@angular/core';
import { Item } from '../../model/item';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router'
import { ServiceService } from '../service.service';

@Component({
  selector : 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent  implements OnInit  {
  data: any;
 
 
 
constructor(private http: HttpClient, private service : ServiceService,  private route: ActivatedRoute , private item : Item) {

}
private subscriber: any;
textString:String;

itemList = [
 
];

ngOnInit()
	{
    
   
    this.service.$cartItemData.subscribe((data:any)=>{
     this.data = data;
    })
   
		 this.subscriber = this.route.params.subscribe(params => {
	       
	       this.http.get('http://localhost:3000/getAllItemCart').subscribe((data:any) => {
           //  cartItem = JSON.parse(JSON.stringify(data));
          
          this.data = data;
          console.log(this.data);
		    });
       });
       
     
  }
  onChange(value) {
    this.service.getItem(value);
 
}
  sendDataToList(cart:any){
  
   this.service.sendDataToService(cart);
  }


}
