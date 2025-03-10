import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLibComponent } from './my-lib.component';

describe('MyLibComponent', () => {
  let component: MyLibComponent;
  let fixture: ComponentFixture<MyLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
