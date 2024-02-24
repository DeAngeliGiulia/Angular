import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fourth3Component } from './fourth3.component';

describe('Fourth3Component', () => {
  let component: Fourth3Component;
  let fixture: ComponentFixture<Fourth3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fourth3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Fourth3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
