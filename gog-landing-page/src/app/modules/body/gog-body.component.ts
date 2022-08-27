import { Component, Input } from '@angular/core';
import { ProductModel } from "../common/models/product.model";

@Component({
  selector: 'gog-body',
  templateUrl: './gog-body.component.html',
  styleUrls: ['./gog-body.component.scss']
})

export class GogBodyComponent {
    @Input() public salesProductsList: Array<ProductModel>;

  constructor() {

  }

}
