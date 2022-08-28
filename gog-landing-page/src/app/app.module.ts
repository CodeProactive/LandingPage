import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GogHeaderComponent } from "./modules/header/gog-header.component";
import { GogCartMenuComponent } from "./modules/header/cart/gog-cart-menu.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { GogCartSummaryComponent } from "./modules/header/cart/cart-summary/gog-cart-summary.component";
import { GogCartItemComponent } from "./modules/header/cart/cart-item/gog-cart-item.component";
import { GogBodyComponent } from "./modules/body/gog-body.component";
import { GogSmallSpotsListComponent } from "./modules/body/game-small-spots-list/gog-small-spots-list.component";
import {
  GogSmallSpotsListItemComponent
} from "./modules/body/game-small-spots-list/game-small-spots-list-item/gog-small-spots-list-item.component";
import { GogCartService } from "./modules/header/cart/gog-cart.service";
import { GogGameSpotComponent } from "./modules/body/game-spot/gog-game-spot.component";

@NgModule({
  declarations: [
    AppComponent,
    GogHeaderComponent,
    GogCartMenuComponent,
    GogCartSummaryComponent,
    GogCartItemComponent,
    GogBodyComponent,
    GogGameSpotComponent,
    GogSmallSpotsListComponent,
    GogSmallSpotsListItemComponent
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
