import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealestateComponent } from './realestate.component';

describe('RealestateComponent', () => {
  let component: RealestateComponent;
  let fixture: ComponentFixture<RealestateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealestateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealestateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
