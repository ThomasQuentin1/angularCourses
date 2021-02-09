import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBlogpostsComponent } from './all-blogposts.component';

describe('AllBlogpostsComponent', () => {
  let component: AllBlogpostsComponent;
  let fixture: ComponentFixture<AllBlogpostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllBlogpostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBlogpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
