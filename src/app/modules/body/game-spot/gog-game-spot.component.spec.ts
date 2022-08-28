import { TestBed } from '@angular/core/testing';
import { GogGameSpotComponent } from "./gog-game-spot.component";

describe('GogGameSpotComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
      ],
      declarations: [
        GogGameSpotComponent
      ],
      providers: [
      ]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(GogGameSpotComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });


});
