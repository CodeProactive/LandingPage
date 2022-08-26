import { Component } from '@angular/core';

@Component({
  selector: 'gog-header',
  templateUrl: './gog-header.component.html',
  styleUrls: ['./gog-header.component.scss']
})

export class GogHeaderComponent {

  public itemsInCart: number = 0;
  public isCartOpen: boolean = false;

  constructor() {
  }

  public toggleCart(): void {
    this.isCartOpen = !this.isCartOpen
  }

  public closeMenuCart(): void {
    // setTimeout(() => {
    //   this.toggleCart()
    // }, 1000);
  }

}
