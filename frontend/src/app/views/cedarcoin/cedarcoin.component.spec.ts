import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CedarcoinComponent } from './cedarcoin.component';

describe('CedarcoinComponent', () => {
  let component: CedarcoinComponent;
  let fixture: ComponentFixture<CedarcoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CedarcoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CedarcoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
