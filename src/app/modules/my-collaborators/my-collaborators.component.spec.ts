import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCollaboratorsComponent } from './my-collaborators.component';

describe('MyCollaboratorsComponent', () => {
  let component: MyCollaboratorsComponent;
  let fixture: ComponentFixture<MyCollaboratorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyCollaboratorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCollaboratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
