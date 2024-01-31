import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { AdminDBComponent } from './admin-db/admin-db.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ManageproductComponent } from './manageproduct/manageproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { CartComponent } from './cart/cart.component';
import { PaymentsComponent } from './payments/payments.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'nav', component: NavbarComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'products', component: ProductsComponent },
      {path:'cart',component:CartComponent},
      {path:'payments',component:PaymentsComponent}
    ]
  },
  {
    path: 'admin', component: AdminDBComponent,
    children: [
      {path:'addproduct',component:AddproductComponent},
      {path:'manageproduct',component:ManageproductComponent},
      {path:'updateproduct',component:UpdateproductComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
