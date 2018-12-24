import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAComponent } from './list-a.component';

describe('ListAComponent', () => {
  let component: ListAComponent;
  let fixture: ComponentFixture<ListAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
