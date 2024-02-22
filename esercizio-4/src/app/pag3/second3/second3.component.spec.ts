import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Second3Component } from './second3.component';

describe('Second3Component', () => {
  let component: Second3Component;
  let fixture: ComponentFixture<Second3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Second3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Second3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
