import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportsComponent } from './supports.component';

describe('SupportsComponent', () => {
  let component: SupportsComponent;
  let fixture: ComponentFixture<SupportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
