import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemResumeComponent } from './item-resume.component';

describe('ItemResumeComponent', () => {
  let component: ItemResumeComponent;
  let fixture: ComponentFixture<ItemResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemResumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
