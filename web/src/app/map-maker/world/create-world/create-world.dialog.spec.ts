import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWorldDialog } from './create-world.dialog';

describe('CreateWorldDialog', () => {
  let component: CreateWorldDialog;
  let fixture: ComponentFixture<CreateWorldDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateWorldDialog ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWorldDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
