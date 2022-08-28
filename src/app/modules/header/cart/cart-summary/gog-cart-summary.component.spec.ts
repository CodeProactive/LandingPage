import { TestBed } from '@angular/core/testing';
import { GogCartSummaryComponent } from "./gog-cart-summary.component";
import { GogCartService } from "../gog-cart.service";

describe('GogCartSummaryComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
      ],
      declarations: [
        GogCartSummaryComponent
      ],
      providers: [
        GogCartService
      ]
    }).compileComponents();
  });


  it('should create the component', () => {
    const fixture = TestBed.createComponent(GogCartSummaryComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

});
