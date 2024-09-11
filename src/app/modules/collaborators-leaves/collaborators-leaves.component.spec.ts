import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaboratorsLeavesComponent } from './collaborators-leaves.component';

describe('CollaboratorsLeavesComponent', () => {
  let component: CollaboratorsLeavesComponent;
  let fixture: ComponentFixture<CollaboratorsLeavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollaboratorsLeavesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollaboratorsLeavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
