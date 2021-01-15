import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingService } from 'src/app/services/loading.service';
import { RoutesService } from 'src/app/services/routes.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  email: string;
  password: string;
  app: string;

  constructor(
    private auth: AuthService,
    private loading: LoadingService,
    private toast: ToastService,
    private routerService: RoutesService
  ) { }

  ngOnInit() {
  }

  async login() {

      this.loading.present('Loading...');

      try{
        const resp = await this.auth.login(this.email, this.password, this.app).toPromise();
        this.loading.dimiss();
        localStorage.setItem('user', JSON.stringify(resp));
        localStorage.setItem('app', JSON.stringify(this.app));
        this.routerService.moveTo('home');
      } catch(error) {
        this.loading.dimiss();
        this.toast.presentToast(error, 'danger');
      }
  }

}
