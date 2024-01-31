import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AdminDBComponent } from './admin-db/admin-db.component';
import { ManageproductComponent } from './manageproduct/manageproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { CartComponent } from './cart/cart.component';
import { PaymentsComponent } from './payments/payments.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    ProductsComponent,
    AddproductComponent,
    AdminDBComponent,
    ManageproductComponent,
    UpdateproductComponent,
    CartComponent,
    PaymentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
