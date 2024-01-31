import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { product } from '../service/product';

@Component({
  selector: 'app-manageproduct',
  templateUrl: './manageproduct.component.html',
  styleUrl: './manageproduct.component.css'
})
export class ManageproductComponent {
  productsArray:any;
  constructor(private service:ProductService){}
  ngOnInit(){
    this.service.getproducts().subscribe((pdt)=>{
      this.productsArray=pdt
    })
  }
  deleteme(p:any){
    this.service.deleteproduct(p);
  }
  changeflag(p:product){
    p.pflag=true;
  }
  update(p:product){
    p.pflag=false;
    this.service.updateproduct(p);
  }
   
}
