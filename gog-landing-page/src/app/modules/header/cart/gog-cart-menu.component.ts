import { Component } from '@angular/core';
import { GogCartService } from "./gog-cart.service";

@Component({
  selector: 'gog-menu-cart',
  templateUrl: './gog-cart-menu.component.html',
  styleUrls: ['./gog-cart-menu.component.scss'],
})
export class GogCartMenuComponent {

  constructor(
    public gogCartService: GogCartService
    ) {

  }

  public itemsInCart(): number {
    return this.gogCartService.numbersOfProductsInCart()
  }

}
