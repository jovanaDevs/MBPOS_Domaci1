import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateitemPage } from './updateitem.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateitemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateitemPageRoutingModule {}
