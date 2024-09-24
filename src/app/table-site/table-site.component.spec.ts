import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSiteComponent } from './table-site.component';

describe('TableSiteComponent', () => {
  let component: TableSiteComponent;
  let fixture: ComponentFixture<TableSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableSiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
