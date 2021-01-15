import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpectedComponent } from './expected.component';

describe('ExpectedComponent', () => {
  let component: ExpectedComponent;
  let fixture: ComponentFixture<ExpectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
