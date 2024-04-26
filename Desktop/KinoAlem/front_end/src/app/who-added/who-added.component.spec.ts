import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoAddedComponent } from './who-added.component';

describe('WhoAddedComponent', () => {
  let component: WhoAddedComponent;
  let fixture: ComponentFixture<WhoAddedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhoAddedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhoAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
