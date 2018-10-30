import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class AfireService {

  shoppingCart: AngularFireList <any>;
  matricula=0;

  constructor(private firebasedb : AngularFireDatabase) { }
  setMatricula(mat){
    this.matricula=mat;
  }
  getShoppingCart(){
    this.shoppingCart = this.firebasedb.list('cart/'+this.matricula);
    return this.shoppingCart;
  }
  addSubject(obj){
    this.shoppingCart.push(obj)
  }
  removeSubject($key){
    this.shoppingCart.remove($key);
  }
}
