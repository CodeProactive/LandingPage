import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GogHeaderComponent } from "./modules/header/gog-header.component";
import { GogMenuCartComponent } from "./modules/header/cart/gog-menu-cart.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import {GogCartSummaryComponent} from "./modules/header/cart/cart-summary/gog-cart-summary.component";

@NgModule({
  declarations: [
    AppComponent,
    GogHeaderComponent,
    GogMenuCartComponent,
    GogCartSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
