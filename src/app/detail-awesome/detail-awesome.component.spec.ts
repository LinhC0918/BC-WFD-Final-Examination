import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAwesomeComponent } from './detail-awesome.component';

describe('DetailAwesomeComponent', () => {
  let component: DetailAwesomeComponent;
  let fixture: ComponentFixture<DetailAwesomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailAwesomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAwesomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
