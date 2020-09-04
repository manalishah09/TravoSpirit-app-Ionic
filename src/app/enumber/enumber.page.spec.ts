import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnumberPage } from './enumber.page';

describe('EnumberPage', () => {
  let component: EnumberPage;
  let fixture: ComponentFixture<EnumberPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnumberPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnumberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
