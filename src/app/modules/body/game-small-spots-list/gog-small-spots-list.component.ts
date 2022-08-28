import { Component, Input } from '@angular/core';
import { ProductModel } from "../../common/models/product.model";

@Component({
  selector: 'gog-small-spots-list',
  templateUrl: './gog-small-spots-list.component.html',
  styleUrls: ['./gog-small-spots-list.component.scss']
})

export class GogSmallSpotsListComponent {

  @Input() public salesProductsList: Array<ProductModel>;

  constructor() {

  }

}
