import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/material/material.module';

import { TableComponent } from './table.component';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TableComponent ],
      imports: [
        NoopAnimationsModule,
        MaterialModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
