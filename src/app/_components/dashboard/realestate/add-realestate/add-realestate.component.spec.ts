import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRealestateComponent } from './add-realestate.component';

describe('AddRealestateComponent', () => {
  let component: AddRealestateComponent;
  let fixture: ComponentFixture<AddRealestateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRealestateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRealestateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
