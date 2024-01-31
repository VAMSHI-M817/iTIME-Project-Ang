import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent {
  constructor(private service:ProductService,private vm:Router){}
  pId:any;
  pName:any;
  pCompany:any;
  pFeatures:any;
  pPrice:any;
  pImage:any;
  newpro:any;

  addproduct(){
    this.newpro={
      productId:this.pId,
      productName:this.pName,
      productCompany:this.pCompany,
      productFeature:this.pFeatures,
      productPrice:this.pPrice,
      productImage:this.pImage
    }
    this.service.addproducts(this.newpro)
    this.vm.navigateByUrl("/admin/products");
  }
}
