import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./common/header/header.component";
import { FooterComponent } from "./common/footer/footer.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { AboutUsComponent } from "./pages/about-us/about-us.component";
import { ProductComponent } from "./pages/product/product.component";
import { ProductItemComponent } from "./common/product-item/product-item.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, DashboardComponent, AboutUsComponent, ProductComponent, ProductItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Product-Front-End';
}
