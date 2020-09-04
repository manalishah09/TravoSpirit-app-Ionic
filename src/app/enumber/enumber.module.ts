import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnumberPageRoutingModule } from './enumber-routing.module';

import { EnumberPage } from './enumber.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnumberPageRoutingModule
  ],
  declarations: [EnumberPage]
})
export class EnumberPageModule {}
