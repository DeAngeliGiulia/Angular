import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuoghiComponent } from './luoghi.component';

describe('LuoghiComponent', () => {
  let component: LuoghiComponent;
  let fixture: ComponentFixture<LuoghiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LuoghiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LuoghiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
