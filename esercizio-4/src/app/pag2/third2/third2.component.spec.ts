import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Third2Component } from './third2.component';

describe('Third2Component', () => {
  let component: Third2Component;
  let fixture: ComponentFixture<Third2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Third2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Third2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
