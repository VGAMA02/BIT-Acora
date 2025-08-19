import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveActivityComponent } from './save-activity.component';

describe('SaveActivityComponent', () => {
  let component: SaveActivityComponent;
  let fixture: ComponentFixture<SaveActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaveActivityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
