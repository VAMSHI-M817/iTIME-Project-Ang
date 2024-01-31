import { Injectable } from '@angular/core';
import { product } from '../service/product';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart:product[]=[]
  length: any;
  index:any;

  addtocart(pro:product){
    this.cart.push(pro);
  }
  getItemsincart(){
    return of(this.cart)
  }
  //second Method
  // removeser(pro:any){
  //   let index = this.cart.findIndex( (item: { productId: any; }) => item.productId == pro.productId);
  //   this.cart.splice(index,1);
  //   this.length--;
  // }
  
  removeser(p:any){
    this.index=this.cart.findIndex((obj)=>
    {
      if(obj.productId==p.productId){
        return obj.productId;
      }
      
    })
    this.cart.splice(this.index,1);
  }

  constructor() { }
}
