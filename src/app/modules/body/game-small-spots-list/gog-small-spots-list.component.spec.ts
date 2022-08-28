import { TestBed } from '@angular/core/testing';
import { GogSmallSpotsListComponent } from "./gog-small-spots-list.component";

describe('GogSmallSpotsListComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
      ],
      declarations: [
        GogSmallSpotsListComponent
      ],
      providers: [
      ]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(GogSmallSpotsListComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });


});
