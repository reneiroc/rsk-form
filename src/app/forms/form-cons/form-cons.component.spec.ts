import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormConsComponent } from './form-cons.component';

describe('FormConsComponent', () => {
  let component: FormConsComponent;
  let fixture: ComponentFixture<FormConsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormConsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormConsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
