import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchVeterinaryComponent } from './search-veterinary.component';

describe('SearchVeterinaryComponent', () => {
  let component: SearchVeterinaryComponent;
  let fixture: ComponentFixture<SearchVeterinaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchVeterinaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchVeterinaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
