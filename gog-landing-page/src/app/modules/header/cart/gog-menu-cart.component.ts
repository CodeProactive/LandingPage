import { Component } from '@angular/core';

@Component({
  selector: 'gog-menu-cart',
  templateUrl: './gog-menu-cart.component.html',
  styleUrls: ['./gog-menu-cart.component.scss'],
})
export class GogMenuCartComponent {
  public itemsInCart: number = 1;

  constructor() {

  }

}
