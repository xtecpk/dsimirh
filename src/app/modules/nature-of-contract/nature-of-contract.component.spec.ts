import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NatureOfContractComponent } from './nature-of-contract.component';

describe('NatureOfContractComponent', () => {
  let component: NatureOfContractComponent;
  let fixture: ComponentFixture<NatureOfContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NatureOfContractComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NatureOfContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
