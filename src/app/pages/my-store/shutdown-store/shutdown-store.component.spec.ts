import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShutdownStoreComponent } from './shutdown-store.component';

describe('ShutdownStoreComponent', () => {
  let component: ShutdownStoreComponent;
  let fixture: ComponentFixture<ShutdownStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShutdownStoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShutdownStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
