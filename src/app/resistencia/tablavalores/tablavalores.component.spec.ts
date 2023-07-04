import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablavaloresComponent } from './tablavalores.component';

describe('TablavaloresComponent', () => {
  let component: TablavaloresComponent;
  let fixture: ComponentFixture<TablavaloresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablavaloresComponent]
    });
    fixture = TestBed.createComponent(TablavaloresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
