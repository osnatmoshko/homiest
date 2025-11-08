import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { MainCatalog } from './main-catalog/main-catalog';
import { Products } from './products/products';
import { ShoppingCart } from './shopping-cart/shopping-cart';
import { AboutAs } from './about-as/about-as';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'catalog', component: MainCatalog },
  { path: 'products', component: Products },
  { path: 'cart', component: ShoppingCart },
  { path: 'about', component: AboutAs },
];
