import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KinoComponent } from './kino.component';

describe('KinoComponent', () => {
  let component: KinoComponent;
  let fixture: ComponentFixture<KinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KinoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
