import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { getuid } from 'process';
import { AuthService } from '../auth.service';
import { Tab1Page } from '../tab1/tab1.page';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  providers:[Tab1Page]
})
export class Tab2Page {
  email: string;
  numberOfRecepies: number;
  sub: Subscription;
  dataService: DataService;
  constructor(
    private tab1: Tab1Page,
    private authService:AuthService,
    private router: Router
  ) {}
  ngOnInit() {

    this.takeEmail();
  }
  async takeEmail(){
    this.email = this.authService.email;
  }
async logout(){
  await this.authService.logout();
  this.router.navigateByUrl('login',{replaceUrl:true});
}

}
