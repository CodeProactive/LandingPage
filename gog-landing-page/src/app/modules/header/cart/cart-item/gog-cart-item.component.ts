import { Component, Input } from '@angular/core';
import { CurrenciesEnum } from "../../../common/models/currencies.enum";
import {ProductModel} from "../../../common/models/product.model";
import {GogCartService} from "../gog-cart.service";

@Component({
  selector: 'gog-cart-item',
  templateUrl: './gog-cart-item.component.html',
  styleUrls: ['./gog-cart-item.component.scss'],
})
export class GogCartItemComponent {
  @Input() public cartItem: ProductModel;
  public CurrenciesEnum: typeof CurrenciesEnum = CurrenciesEnum;
  public isRemoveButtonVisible: boolean = false;

  constructor(
    public gogCartService: GogCartService,
  ) {

  }


}
