import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LispageComponent } from './lispage.component';

describe('LispageComponent', () => {
  let component: LispageComponent;
  let fixture: ComponentFixture<LispageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LispageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LispageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
