import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBookingComponent } from './search-booking.component';

describe('SearchBookingComponent', () => {
  let component: SearchBookingComponent;
  let fixture: ComponentFixture<SearchBookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBookingComponent]
    });
    fixture = TestBed.createComponent(SearchBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
