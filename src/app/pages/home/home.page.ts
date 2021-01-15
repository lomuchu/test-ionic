import { Component, OnInit } from '@angular/core';
import { TutenService } from 'src/app/services/tuten.service';
import * as moment from 'moment';
import { ModalController } from '@ionic/angular';
import { ModalFilterPage } from './modal-filter/modal-filter.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  data = [];
  dataFilter = [];

  constructor(
    private tutenService: TutenService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {

    this.getData();
  }

  async getData() {
      const resp: any = await this.tutenService.getData().toPromise();

      await resp.map(item => this.data.push(item));
      this.data.map(item => item.bookingTime = moment(item.bookingTime).format("DD MMM YYYY"))
      this.dataFilter = this.data;
      console.log(this.dataFilter)
  }


  async openModal() {

    const modal = await this.modalCtrl.create({
      component: ModalFilterPage,
    });

   await modal.present();

   const { data } = await modal.onDidDismiss();

   this.filtrar(data)
  }


  filtrar(valores) {
    let filtrados = this.data;

    let campo = valores.campo;
    let filtro = valores.valor;
    let expresion = valores.expresion;

        if(campo && filtro && expresion) {

            if(campo == 'bookingId') {

                if(expresion == '1') {
                    filtrados = this.data.filter(item => item.bookingId == filtro);
                } else if(expresion == '2') {
                    filtrados = this.data.filter(item => item.bookingId >= filtro);
                } else if(expresion == '3') {
                    filtrados = this.data.filter(item => item.bookingId <= filtro);
                }
                
            } else {
                if(expresion == '1') {
                    filtrados = this.data.filter(item => item.bookingPrice == filtro);
                } else if(expresion == '2') {
                    filtrados = this.data.filter(item => item.bookingPrice >= filtro);
                } else if(expresion == '3') {
                    filtrados = this.data.filter(item => item.bookingPrice <= filtro);
                }
            }
        }

        this.dataFilter = filtrados;
  }

}
