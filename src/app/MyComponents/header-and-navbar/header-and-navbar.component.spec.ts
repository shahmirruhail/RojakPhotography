import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAndNavbarComponent } from './header-and-navbar.component';

describe('HeaderAndNavbarComponent', () => {
  let component: HeaderAndNavbarComponent;
  let fixture: ComponentFixture<HeaderAndNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderAndNavbarComponent]
    });
    fixture = TestBed.createComponent(HeaderAndNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
