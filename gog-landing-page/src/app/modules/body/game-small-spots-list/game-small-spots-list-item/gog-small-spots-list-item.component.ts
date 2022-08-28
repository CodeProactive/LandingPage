import { Component, Input } from '@angular/core';
import { ProductModel } from "../../../common/models/product.model";
import { CurrenciesEnum } from "../../../common/models/currencies.enum";
import { GogCartService } from "../../../header/cart/gog-cart.service";
import { CopyEng } from "../../../common/copy/copy-eng";

@Component({
  selector: 'gog-small-spots-list-item',
  templateUrl: './gog-small-spots-list-item.component.html',
  styleUrls: ['./gog-small-spots-list-item.component.scss']
})

export class GogSmallSpotsListItemComponent {
  @Input() public salesProduct: ProductModel;
  public CurrenciesEnum: typeof CurrenciesEnum = CurrenciesEnum;
  public COPY_ENG: typeof CopyEng = CopyEng;

  constructor(
    public gogCartService: GogCartService
  ) {

  }

}
