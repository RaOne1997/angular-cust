import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetHelloWorldComponent } from './widget-hello-world.component';

describe('WidgetHelloWorldComponent', () => {
  let component: WidgetHelloWorldComponent;
  let fixture: ComponentFixture<WidgetHelloWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetHelloWorldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetHelloWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
