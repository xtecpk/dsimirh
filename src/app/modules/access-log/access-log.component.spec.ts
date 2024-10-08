import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessLogComponent } from './access-log.component';

describe('AccessLogComponent', () => {
  let component: AccessLogComponent;
  let fixture: ComponentFixture<AccessLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessLogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
