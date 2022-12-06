import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    private authService:AuthService,
    private router: Router
  ) {}
async logout(){
  await this.authService.logout();
  this.router.navigateByUrl('login',{replaceUrl:true});
}
}
