import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { DiscountComponent } from './pages/discount/discount.component';
import { FemaleComponent } from './pages/female/female.component';
import { MaleComponent } from './pages/male/male.component';
import { ChildrenComponent } from './pages/children/children.component';
import { AccessoriesComponent } from './pages/accessories/accessories.component';
import { ExpectedComponent } from './pages/expected/expected.component';
import { BasketComponent } from './pages/basket/basket.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

import { AdminComponent } from './admin/admin.component';
import { AdminCategoryComponent } from './admin/admin-category/admin-category.component';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { AdminOrderComponent } from './admin/admin-order/admin-order.component';
import { AdminDiscountComponent } from './admin/admin-discount/admin-discount.component';
// import { AdminBrandsComponent } from './admin/admin-brands/admin-brands.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'discount', component: DiscountComponent },
  { path: 'female', component: FemaleComponent },
  { path: 'male', component: MaleComponent },
  { path: 'children', component: ChildrenComponent },
  { path: 'accessories', component: AccessoriesComponent },
  { path: 'menu/:category', component: ProductComponent },
  { path: 'menu/:category/:id', component: ProductDetailsComponent },
  { path: 'expected', component: ExpectedComponent },
  { path: 'basket', component: BasketComponent },
  { path: 'admin-login', component: LoginComponent },
  // { path: '**', component: HomeComponent },
  {
    path: 'admin', component: AdminComponent, canActivate: [AuthGuard], children: [
      { path: 'admin-category', component: AdminCategoryComponent },
      { path: 'admin-product', component: AdminProductComponent },
      { path: 'admin-order', component: AdminOrderComponent },
      // { path: 'admin-brands', component: AdminBrandsComponent },
      { path: 'admin-discount', component: AdminDiscountComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
