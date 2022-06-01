import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UOperationClaimAddComponent } from './u-operation-claim-add.component';

describe('UOperationClaimAddComponent', () => {
  let component: UOperationClaimAddComponent;
  let fixture: ComponentFixture<UOperationClaimAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UOperationClaimAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UOperationClaimAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
