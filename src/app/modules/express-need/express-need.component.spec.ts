import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressNeedComponent } from './express-need.component';

describe('ExpressNeedComponent', () => {
  let component: ExpressNeedComponent;
  let fixture: ComponentFixture<ExpressNeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpressNeedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpressNeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
