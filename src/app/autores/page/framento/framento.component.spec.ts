import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FramentoComponent } from './framento.component';

describe('FramentoComponent', () => {
  let component: FramentoComponent;
  let fixture: ComponentFixture<FramentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FramentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FramentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
