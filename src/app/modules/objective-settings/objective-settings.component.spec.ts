import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectiveSettingsComponent } from './objective-settings.component';

describe('ObjectiveSettingsComponent', () => {
  let component: ObjectiveSettingsComponent;
  let fixture: ComponentFixture<ObjectiveSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjectiveSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectiveSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
