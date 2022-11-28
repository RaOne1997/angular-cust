import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerUserModalComponent } from './customer-user-modal.component';

describe('CustomerUserModalComponent', () => {
  let component: CustomerUserModalComponent;
  let fixture: ComponentFixture<CustomerUserModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerUserModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerUserModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
