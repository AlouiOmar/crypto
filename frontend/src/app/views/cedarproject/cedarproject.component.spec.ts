import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CedarprojectComponent } from './cedarproject.component';

describe('CedarprojectComponent', () => {
  let component: CedarprojectComponent;
  let fixture: ComponentFixture<CedarprojectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CedarprojectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CedarprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
