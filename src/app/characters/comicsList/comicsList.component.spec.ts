import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicsListComponent } from './comicsList.component';

describe('ComicsComponent', () => {
  let component: ComicsListComponent;
  let fixture: ComponentFixture<ComicsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
