import { Component } from '@angular/core';
import { ProductModel } from "./modules/common/models/product.model";
import { CurrenciesEnum } from "./modules/common/models/currencies.enum";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gog-landing-page';

  public salesProductsList: Array<ProductModel> = [
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

}
