import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cart;
  total=0;
  creditos=0;
  constructor(private dataService:DataService)
  {
    this.cart=this.dataService.cart;

    this.cart.forEach(element => {
      this.total+=element.precio;
      this.creditos+=element.CREDIT_HRS;      
    });
  }
  ngOnInit() {
  }

}
