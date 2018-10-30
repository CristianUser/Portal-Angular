import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
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
  constructor(private fireservice:AfireService,private dataService:DataService)
  {}
  removeSubject($key){
    this.fireservice.removeSubject($key);
  }
  removeAll(){
    this.cart.forEach(subject => {
      this.removeSubject(subject.$key);
    });
    setTimeout(()=>{
      this.total=0;
      this.creditos=0;
    },200);
  }
  setVars(){
    this.total=0;
    this.creditos=0;
    this.cart.forEach(element => {
      this.total+=element.precio;
      this.creditos+=element.CREDIT_HRS;      
    });
  }
  postAsignatura(subject,status){
    this.dataService.postAsignatura(subject,status).subscribe(res=> {
    console.log(res);
    })
  }
  submitSubjects(){
    // this.postAsignatura(this.cart[0],'P');
    this.cart.forEach(subject => {
      // console.log('inicio')
      this.postAsignatura(subject,'P');
      // console.log('termino')
    });
  };
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
