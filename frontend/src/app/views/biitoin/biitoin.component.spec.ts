import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiitoinComponent } from './biitoin.component';

describe('BiitoinComponent', () => {
  let component: BiitoinComponent;
  let fixture: ComponentFixture<BiitoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiitoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiitoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
