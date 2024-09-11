import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDocsComponent } from './my-docs.component';

describe('MyDocsComponent', () => {
  let component: MyDocsComponent;
  let fixture: ComponentFixture<MyDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyDocsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
