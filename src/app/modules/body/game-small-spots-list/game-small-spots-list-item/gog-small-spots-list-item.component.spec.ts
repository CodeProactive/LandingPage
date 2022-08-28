import { TestBed } from '@angular/core/testing';
import { GogSmallSpotsListItemComponent } from "./gog-small-spots-list-item.component";
import { GogCartService } from "../../../header/cart/gog-cart.service";

describe('GogSmallSpotsListItemComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
      ],
      declarations: [
        GogSmallSpotsListItemComponent
      ],
      providers: [
        GogCartService
      ]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(GogSmallSpotsListItemComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });


});
