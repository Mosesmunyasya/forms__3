import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsSiteComponent } from './cards-site.component';

describe('CardsSiteComponent', () => {
  let component: CardsSiteComponent;
  let fixture: ComponentFixture<CardsSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsSiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
