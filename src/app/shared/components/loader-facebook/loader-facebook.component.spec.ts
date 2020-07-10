import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderFacebookComponent } from './loader-facebook.component';

describe('LoaderFacebookComponent', () => {
  let component: LoaderFacebookComponent;
  let fixture: ComponentFixture<LoaderFacebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaderFacebookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderFacebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
