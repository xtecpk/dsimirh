import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerResponseComponent } from './manager-response.component';

describe('ManagerResponseComponent', () => {
  let component: ManagerResponseComponent;
  let fixture: ComponentFixture<ManagerResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagerResponseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
