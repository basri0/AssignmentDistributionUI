import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UOperationClaimListComponent } from './u-operation-claim-list.component';

describe('UOperationClaimListComponent', () => {
  let component: UOperationClaimListComponent;
  let fixture: ComponentFixture<UOperationClaimListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UOperationClaimListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UOperationClaimListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
