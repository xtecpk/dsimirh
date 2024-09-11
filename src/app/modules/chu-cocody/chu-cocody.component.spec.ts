import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuCocodyComponent } from './chu-cocody.component';

describe('ChuCocodyComponent', () => {
  let component: ChuCocodyComponent;
  let fixture: ComponentFixture<ChuCocodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChuCocodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChuCocodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
