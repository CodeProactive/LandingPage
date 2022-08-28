import { Component } from '@angular/core';
import { GogCartService } from "./cart/gog-cart.service";

@Component({
  selector: 'gog-header',
  templateUrl: './gog-header.component.html',
  styleUrls: ['./gog-header.component.scss']
})

export class GogHeaderComponent {
  public isCartOpen: boolean = false;

  constructor(
    public gogCartService: GogCartService,
  ) {  }

}
