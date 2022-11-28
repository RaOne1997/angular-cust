import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCustomeruserModalComponent } from './edit-customeruser-modal.component';

describe('EditCustomeruserModalComponent', () => {
  let component: EditCustomeruserModalComponent;
  let fixture: ComponentFixture<EditCustomeruserModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCustomeruserModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCustomeruserModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
