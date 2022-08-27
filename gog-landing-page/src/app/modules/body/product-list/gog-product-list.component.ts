import { Component, Input } from '@angular/core';
import { ProductModel } from "../../common/models/product.model";

@Component({
  selector: 'gog-product-list',
  templateUrl: './gog-product-list.component.html',
  styleUrls: ['./gog-product-list.component.scss']
})

export class GogProductListComponent {

  @Input() public salesProductsList: Array<ProductModel>;

  constructor() {

  }

}
