import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { RoutesService } from 'src/app/services/routes.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(
    private menuCtrl: MenuController,
    private routerService: RoutesService
  ) { }

  ngOnInit() {}


  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('app');
    this.routerService.moveTo('login');
  }
}
