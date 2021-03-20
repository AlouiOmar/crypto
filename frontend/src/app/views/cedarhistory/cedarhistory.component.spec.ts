import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CedarhistoryComponent } from './cedarhistory.component';

describe('CedarhistoryComponent', () => {
  let component: CedarhistoryComponent;
  let fixture: ComponentFixture<CedarhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CedarhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CedarhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
