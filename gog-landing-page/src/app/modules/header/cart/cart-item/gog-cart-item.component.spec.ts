import { TestBed } from '@angular/core/testing';
import { GogCartService } from "../gog-cart.service";
import { GogCartItemComponent } from "./gog-cart-item.component";

describe('GogCartItemComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
      ],
      declarations: [
        GogCartItemComponent
      ],
      providers: [
        GogCartService
      ]
    }).compileComponents();
  });


  it('should create the component', () => {
    const fixture = TestBed.createComponent(GogCartItemComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

});
