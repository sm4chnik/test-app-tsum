import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenCountComponent } from './children-count.component';

describe('ChildrenCountComponent', () => {
  let component: ChildrenCountComponent;
  let fixture: ComponentFixture<ChildrenCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildrenCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrenCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
