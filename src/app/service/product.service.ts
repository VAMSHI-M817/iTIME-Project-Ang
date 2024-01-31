import { Injectable } from '@angular/core';
import { product } from './product';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: product[] = [
    {
      productId: "1",
      productName: "Casio IIluminator",
      productCompany: "Casio",
      productFeatures: "Water Resistant | Digital Led",
      productPrice: "35000",
      productImage: "assets/images/Mens/1.jpg"      
      ,pflag:false
    },
    {
      productId: "2",
      productName: "Skagen Denmark",
      productCompany: "Skagen",
      productFeatures: "Metal Finish | Analog",
      productPrice: "15000",
      productImage: "assets/images/Mens/2.jpg",
      pflag:false
    },
    {
      productId: "3",
      productName: "Guess 100M",
      productCompany: "Clinton",
      productFeatures: "A1 Leather Finish | Automatic",
      productPrice: "150000",
      productImage: "assets/images/Mens/3.jpg"      
      ,pflag:false
    },
    {
      productId: "4",
      productName: "Timex Rdx",
      productCompany: "Casio",
      productFeatures: "Water Resistant | Analog",
      productPrice: "45000",
      productImage: "assets/images/Mens/4.jpg"  
      ,pflag:false
    },
    {
      productId: "5",
      productName: "Alba 20",
      productCompany: "Alba",
      productFeatures: "Water Resistant | Automatic",
      productPrice: "40000",
      productImage: "assets/images/Mens/5.jpg"      
      ,pflag:false
    },
    {
      productId: "5",
      productName: "G-shock",
      productCompany: "Casio",
      productFeatures: "Water Resistant",
      productPrice: "40000",
      productImage: "assets/images/Mens/6.jpg"      
      ,pflag:false
    }



  ]
  constructor() { }
    getproducts(){
      return of (this.products)
    }
    addproducts(newpro:product){
      this.products.push(newpro);
    }
    deleteproduct(pro:product){
      let index = this.products.findIndex((item)=>{
        if(item.productId==pro.productId){
          return item.productId;
        }
      })
      this.products.splice(index,1)
    }
    updateproduct(pro:product){
      let index=this.products.findIndex((Item)=>{
        if(Item.productId==pro.productId){
          return Item.productId;
        }
      })
      this.products.splice(index,1,pro);
    }
}
