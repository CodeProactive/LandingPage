import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GogMenuCartComponent } from './gog-menu-cart.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        GogMenuCartComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(GogMenuCartComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'gog-landing-page'`, () => {
    const fixture = TestBed.createComponent(GogMenuCartComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('gog-landing-page');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(GogMenuCartComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('gog-landing-page app is running!');
  });
});
