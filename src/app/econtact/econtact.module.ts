import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EcontactPageRoutingModule } from './econtact-routing.module';

import { EcontactPage } from './econtact.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EcontactPageRoutingModule
  ],
  declarations: [EcontactPage]
})
export class EcontactPageModule {}
