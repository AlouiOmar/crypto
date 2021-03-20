import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryWalletComponent } from './history-wallet.component';

describe('HistoryWalletComponent', () => {
  let component: HistoryWalletComponent;
  let fixture: ComponentFixture<HistoryWalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryWalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
