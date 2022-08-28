import { Component } from '@angular/core';
import { CopyEng } from 'src/app/modules/common/copy/copy-eng';
import { GogCartService } from "../gog-cart.service";

@Component({
  selector: 'gog-cart-summary',
  templateUrl: './gog-cart-summary.component.html',
  styleUrls: ['./gog-cart-summary.component.scss'],
})
export class GogCartSummaryComponent {
  public COPY_ENG: typeof CopyEng = CopyEng;
  constructor(
    public gogCartService: GogCartService,
  ) {

  }
}
