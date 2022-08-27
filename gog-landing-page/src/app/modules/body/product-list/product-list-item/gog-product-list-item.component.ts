import { Component, Input } from '@angular/core';
import { ProductModel } from "../../../common/models/product.model";
import { CurrenciesEnum } from "../../../common/models/currencies.enum";
import {GogCartService} from "../../../header/cart/gog-cart.service";

@Component({
  selector: 'gog-product-list-item',
  templateUrl: './gog-product-list-item.component.html',
  styleUrls: ['./gog-product-list-item.component.scss']
})

export class GogProductListItemComponent {
  @Input() public salesProduct: ProductModel;
  public CurrenciesEnum: typeof CurrenciesEnum = CurrenciesEnum;

  constructor(
    public gogCartService: GogCartService
  ) {

  }

}
