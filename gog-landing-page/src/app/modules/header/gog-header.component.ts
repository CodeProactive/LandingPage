import { Component } from '@angular/core';
import { CurrenciesEnum } from "../common/models/currencies.enum";
import { ProductModel } from "../common/models/product.model";
import {GogCartService} from "./cart/gog-cart.service";

@Component({
  selector: 'gog-header',
  templateUrl: './gog-header.component.html',
  styleUrls: ['./gog-header.component.scss']
})

export class GogHeaderComponent {
  //Local mock of a possible backend array containing all products
  public cartItems: Array<ProductModel> = [
    {
      productName: "oddworld: stranger's wrath",
      productPrice: 9.99,
      currency: CurrenciesEnum.USD,
      discount: "-50%",
      isOwned: false,
      isInCart: false,
      imgUrl: "assets/images/oddworlds.png"
    },
    {
      productName: "chaos on deponia",
      productPrice: 22.11,
      currency: CurrenciesEnum.USD,
      discount: "",
      isOwned: true,
      isInCart: false,
      imgUrl: "assets/images/chaos_on_deponia.png"
    },
    {
      productName: "the settlers 2: gold edition",
      productPrice: 19.99,
      currency: CurrenciesEnum.USD,
      discount: "",
      isOwned: false,
      isInCart: true,
      imgUrl: "assets/images/settlers.png"
    },
    {
      productName: "neverwinter nights",
      productPrice: 9.99,
      currency: CurrenciesEnum.USD,
      discount: "-50%",
      isOwned: false,
      isInCart: false,
      imgUrl: "assets/images/neverwinter_nights.png"
    },
    {
      productName: "assasin's creed: director's cut",
      productPrice: 5.99,
      currency: CurrenciesEnum.USD,
      discount: "-20%",
      isOwned: true,
      isInCart: true,
      imgUrl: "assets/images/assasins_creed.png"
    },
  ];
  public itemsInCart: number = 0;
  public isCartOpen: boolean = false;

  constructor(
    public gogCartService: GogCartService,
  ) {
  }

  public toggleCartVisibility(): void {
    this.isCartOpen = !this.isCartOpen
  }

  public closeMenuCart(): void {
    // setTimeout(() => {
    //   this.toggleCart()
    // }, 1000);
  }

}
