import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  sub?: Subscription;
  recepies: any;
  constructor(public modalCtrl: ModalController,
    private dataService: DataService) {}
    ngOnInit() {
      this.getData();
      this.dataService.getRecepies().subscribe(res=>{
        console.log("My recepies: ",res);
      });
    }
    async getData() {
      this.sub = await this.dataService.getRecepies().subscribe((res) => {
        this.recepies = res;
        console.log(this.recepies);
      });
    }

}
