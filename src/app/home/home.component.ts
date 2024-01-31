import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private vm: Router) { }
  ngOnInit() {
    if (localStorage.getItem("Loginuser")==null) {
      this.vm.navigateByUrl("")
    }
  }
}
