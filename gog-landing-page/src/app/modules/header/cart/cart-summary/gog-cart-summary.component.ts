import { Component } from '@angular/core';
import {GogCartService} from "../gog-cart.service";

@Component({
  selector: 'gog-cart-summary',
  templateUrl: './gog-cart-summary.component.html',
  styleUrls: ['./gog-cart-summary.component.scss'],
})
export class GogCartSummaryComponent {

  constructor(
    public gogCartService: GogCartService,
  ) {

  }
}
