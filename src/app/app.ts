import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { MainCatalog } from './main-catalog/main-catalog';
import { ShoppingCart } from './shopping-cart/shopping-cart';
import { Products } from './products/products';
import { AboutAs } from './about-as/about-as';
import { HomePage } from './home-page/home-page';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule, 
    RouterOutlet, 
    MainCatalog, 
    ShoppingCart, 
    Products, 
    AboutAs, 
    HomePage
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('homeiest');
}
