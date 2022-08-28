import { Component } from '@angular/core';
import { CopyEng } from "../common/copy/copy-eng";
import { SalesProductsListMock } from "../mock/salesProductListMock";

@Component({
  selector: 'gog-body',
  templateUrl: './gog-body.component.html',
  styleUrls: ['./gog-body.component.scss']
})

export class GogBodyComponent {
  public COPY_ENG: typeof CopyEng = CopyEng;
  public salesProductsList: typeof SalesProductsListMock = SalesProductsListMock;

  constructor() {
  }

}
