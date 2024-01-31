import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  productsArray:any;
  constructor(private vm:Router,private service:ProductService,private cartservice:CartService){}
  addtocart(p:any){
    this.cartservice.addtocart(p);
    this.vm.navigateByUrl("/nav/cart")

  }
  ngOnInit(){
    this.service.getproducts().subscribe((pdt)=>{
      this.productsArray=pdt
    })
  }
}
