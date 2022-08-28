import { TestBed } from '@angular/core/testing';
import { GogCartMenuComponent } from "./gog-cart-menu.component";
import { GogCartService } from "./gog-cart.service";

describe('GogCartMenuComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
      ],
      declarations: [
        GogCartMenuComponent
      ],
      providers: [
        GogCartService
      ]
    }).compileComponents();
  });


  it('should create the component', () => {
    const fixture = TestBed.createComponent(GogCartMenuComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

});
