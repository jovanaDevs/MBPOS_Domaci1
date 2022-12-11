import { Component, Input, OnInit } from '@angular/core';
import { Recepie } from '../data.service';
import { ModalController } from '@ionic/angular';
import { DataService } from '../data.service';
@Component({
  selector: 'app-updateitem',
  templateUrl: './updateitem.page.html',
  styleUrls: ['./updateitem.page.scss'],
})
export class UpdateitemPage implements OnInit {
  @Input() recepie: Recepie;
  constructor(public modalCtrl: ModalController,
    private dataService: DataService) { }
    async dismiss() {
      await this.modalCtrl.dismiss();
    }
  ngOnInit() {
  }
  async updateRecepie() {
    await this.dataService.updateRecepie(this.recepie);
    this.dismiss();
  }
}
