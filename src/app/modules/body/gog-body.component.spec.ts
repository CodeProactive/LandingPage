import { TestBed } from '@angular/core/testing';
import { GogBodyComponent } from "./gog-body.component";

describe('GogBodyComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
      ],
      declarations: [
        GogBodyComponent
      ],
      providers: [
      ]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(GogBodyComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });


});
