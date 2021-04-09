import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CedaraddprojectComponent } from './cedaraddproject.component';

describe('CedaraddprojectComponent', () => {
  let component: CedaraddprojectComponent;
  let fixture: ComponentFixture<CedaraddprojectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CedaraddprojectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CedaraddprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
