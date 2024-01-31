import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartarr: any; obj: any; totalprice: any = 0;
  p: any;
  constructor(private vm: Router, private service: CartService) { }
  calc() {
    for (this.obj of this.cartarr)
      this.totalprice += parseInt(this.obj.productPrice)
  }
  ngOnInit() {
    this.service.getItemsincart().subscribe((res) => {
      this.cartarr = res;

    })
    this.calc();
  }
  placeorder() {
    if (this.totalprice == '0') {
      Swal.fire({
        icon: 'error',
        title: 'Order failed ⚠︎',
        text: `Enter valid details & Add products into cart`
      })
    }
    else {
      Swal.fire({
        icon: 'success',
        title: 'Order Placed',
        text: `Click 'OK' to continue shopping`
        
      })
    this.vm.navigateByUrl("/nav/home")
    }
  }
  exit(){
    this.vm.navigateByUrl("/nav/home")
  }

  remove(p: any) {
    this.service.removeser(p)
    this.totalprice = this.totalprice - p.productPrice
  }

}
