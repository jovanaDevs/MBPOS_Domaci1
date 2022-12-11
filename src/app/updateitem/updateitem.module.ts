import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateitemPageRoutingModule } from './updateitem-routing.module';

import { UpdateitemPage } from './updateitem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateitemPageRoutingModule
  ],
  declarations: [UpdateitemPage]
})
export class UpdateitemPageModule {}
