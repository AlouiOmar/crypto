import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitcComponent } from "./BitcComponent";

describe('BitcComponent', () => {
  let component: BitcComponent;
  let fixture: ComponentFixture<BitcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
