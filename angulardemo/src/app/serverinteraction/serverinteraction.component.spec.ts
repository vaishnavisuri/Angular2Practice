import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerinteractionComponent } from './serverinteraction.component';

describe('ServerinteractionComponent', () => {
  let component: ServerinteractionComponent;
  let fixture: ComponentFixture<ServerinteractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerinteractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerinteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
