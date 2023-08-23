import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchNamesComponent } from './search-names.component';

describe('SearchNamesComponent', () => {
  let component: SearchNamesComponent;
  let fixture: ComponentFixture<SearchNamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchNamesComponent]
    });
    fixture = TestBed.createComponent(SearchNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
