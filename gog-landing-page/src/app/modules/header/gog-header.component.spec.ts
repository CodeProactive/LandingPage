import { TestBed} from '@angular/core/testing';
import { GogHeaderComponent } from "./gog-header.component";
import { GogCartService } from "./cart/gog-cart.service";

describe('GogHeaderComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
      ],
      declarations: [
        GogHeaderComponent
      ],
      providers: [
        GogCartService
      ]
    }).compileComponents();
  });


  it('should create the component', () => {
    const fixture = TestBed.createComponent(GogHeaderComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should toggle cart visibility', () => {
    const fixture = TestBed.createComponent(GogHeaderComponent);
    const component = fixture.componentInstance;
    component.isCartOpen = true;
    component.toggleCartVisibility();
    expect(component.isCartOpen).toBeFalse();
  });

});
