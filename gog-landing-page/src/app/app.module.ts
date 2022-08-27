import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GogHeaderComponent } from "./modules/header/gog-header.component";
import { GogCartMenuComponent } from "./modules/header/cart/gog-cart-menu.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import {GogCartSummaryComponent} from "./modules/header/cart/cart-summary/gog-cart-summary.component";
import {GogCartItemComponent} from "./modules/header/cart/cart-item/gog-cart-item.component";
import {GogBodyComponent} from "./modules/body/gog-body.component";
import {GogCarouselComponent} from "./modules/body/carousel/gog-carousel.component";
import {GogProductListComponent} from "./modules/body/product-list/gog-product-list.component";
import {
  GogProductListItemComponent
} from "./modules/body/product-list/product-list-item/gog-product-list-item.component";
import {GogCartService} from "./modules/header/cart/gog-cart.service";

@NgModule({
  declarations: [
    AppComponent,
    GogHeaderComponent,
    GogCartMenuComponent,
    GogCartSummaryComponent,
    GogCartItemComponent,
    GogBodyComponent,
    GogCarouselComponent,
    GogProductListComponent,
    GogProductListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule
  ],
  providers: [
    GogCartService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
