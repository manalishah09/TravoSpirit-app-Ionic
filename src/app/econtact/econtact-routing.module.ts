import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EcontactPage } from './econtact.page';

const routes: Routes = [
  {
    path: '',
    component: EcontactPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EcontactPageRoutingModule {}
