import { Component } from '@angular/core';

@Component({
  selector: 'gog-header',
  templateUrl: './gog-header.component.html',
  styleUrls: ['./gog-header.component.scss']
})
export class GogHeaderComponent {
  public itemsInCart: number = 0;

  constructor(){}

  public toggleCartVisibility(): void {
    this.itemsInCart++
  }
}
