import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubDivisionComponent } from './sub-division.component';

describe('SubDivisionComponent', () => {
  let component: SubDivisionComponent;
  let fixture: ComponentFixture<SubDivisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubDivisionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubDivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
