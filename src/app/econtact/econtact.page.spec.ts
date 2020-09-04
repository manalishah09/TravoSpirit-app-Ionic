import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EcontactPage } from './econtact.page';

describe('EcontactPage', () => {
  let component: EcontactPage;
  let fixture: ComponentFixture<EcontactPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcontactPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EcontactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
