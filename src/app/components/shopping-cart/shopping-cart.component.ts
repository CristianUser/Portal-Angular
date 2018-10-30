import { Component, OnInit } from '@angular/core';
import { AfireService } from '../../services/afire.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cart;
  total=0;
  creditos=0;
  constructor(private fireservice:AfireService)
  {}
  removeSubject($key){
    this.fireservice.removeSubject($key);
  }
  setVars(){
    this.total=0;
    this.creditos=0;
    this.cart.forEach(element => {
      this.total+=element.precio;
      this.creditos+=element.CREDIT_HRS;      
    });
  }
  ngOnInit() {
    this.fireservice.getShoppingCart().snapshotChanges()
    .subscribe(item =>{
      this.cart= [];
      item.forEach(element =>{
       let x = element.payload.toJSON();
       x['$key'] = element.key;   
       this.cart.push(x);
       this.setVars();
      });
    })
  }

}
