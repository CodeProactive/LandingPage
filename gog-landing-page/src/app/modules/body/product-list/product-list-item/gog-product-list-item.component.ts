import { Component, Input } from '@angular/core';
import { ProductModel } from "../../../common/models/product.model";
import { CurrenciesEnum } from "../../../common/models/currencies.enum";
import { GogCartService } from "../../../header/cart/gog-cart.service";
import { CopyEng } from "../../../common/copy/copy-eng";

@Component({
  selector: 'gog-product-list-item',
  templateUrl: './gog-product-list-item.component.html',
  styleUrls: ['./gog-product-list-item.component.scss']
})

export class GogProductListItemComponent {
  @Input() public salesProduct: ProductModel;
  public CurrenciesEnum: typeof CurrenciesEnum = CurrenciesEnum;
  public COPY_ENG: typeof CopyEng = CopyEng;

  constructor(
    public gogCartService: GogCartService
  ) {

  }

}
