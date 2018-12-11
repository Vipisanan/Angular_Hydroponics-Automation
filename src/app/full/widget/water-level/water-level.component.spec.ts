import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterLevelComponent } from './water-level.component';

describe('WaterLevelComponent', () => {
  let component: WaterLevelComponent;
  let fixture: ComponentFixture<WaterLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaterLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
