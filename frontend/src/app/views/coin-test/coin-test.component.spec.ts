import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinTestComponent } from './coin-test.component';

describe('CoinTestComponent', () => {
  let component: CoinTestComponent;
  let fixture: ComponentFixture<CoinTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
