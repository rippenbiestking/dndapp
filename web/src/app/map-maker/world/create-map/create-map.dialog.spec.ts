import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMapDialog } from './create-map.dialog';

describe('CreateMapDialog', () => {
  let component: CreateMapDialog;
  let fixture: ComponentFixture<CreateMapDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMapDialog ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMapDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
