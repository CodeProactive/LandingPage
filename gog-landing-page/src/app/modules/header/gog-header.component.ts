import { Component } from '@angular/core';
import {GogCartService} from "./cart/gog-cart.service";

@Component({
  selector: 'gog-header',
  templateUrl: './gog-header.component.html',
  styleUrls: ['./gog-header.component.scss']
})

export class GogHeaderComponent {
  public isCartOpen: boolean = false;

  constructor(
    public gogCartService: GogCartService,
  ) {
  }

  public toggleCartVisibility(): void {
    this.isCartOpen = !this.isCartOpen
  }

  public closeMenuCart(): void {
    setTimeout(() => {
      this.isCartOpen = false;
    }, 1000);
  }

}
