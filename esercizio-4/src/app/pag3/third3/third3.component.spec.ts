import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Third3Component } from './third3.component';

describe('Third3Component', () => {
  let component: Third3Component;
  let fixture: ComponentFixture<Third3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Third3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Third3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
