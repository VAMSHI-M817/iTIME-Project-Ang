import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private vm: Router) { }
  uname: any;
  pwd: any;
  user: any;
  Logincheck() {
    if (this.uname == "admin" && this.pwd =="admin123") {
      this.vm.navigateByUrl("/admin/addproduct")
      Swal.fire({
        title: `Login Successful`,
        text:`Click 'OK' to continue`,
        icon: 'success'
      })
      this.user = {
        "Username": this.uname,
        "Password": this.pwd
      }
      localStorage.setItem("Loginuser", JSON.stringify(this.user))
    }
    else {
      if (this.uname !== null && this.pwd == "0000") {
        this.vm.navigateByUrl("/nav/home")
        Swal.fire({
          title: `Login Successful`,
          text:`Click 'OK' to continue`,
          icon: 'success'
        })
        this.user = {
          "username": this.uname,
          "password": this.pwd
        }
        localStorage.setItem("Loginuser", JSON.stringify(this.user))
      }
      else {
        Swal.fire({
          title: `Oops...!`,
          text: `Password or Username Incorrect`,
          icon: 'error'
        })

      }
    }
  }
}
