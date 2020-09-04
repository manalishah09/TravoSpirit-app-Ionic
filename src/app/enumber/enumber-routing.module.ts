import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnumberPage } from './enumber.page';

const routes: Routes = [
  {
    path: '',
    component: EnumberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnumberPageRoutingModule {}
