import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-filter',
  templateUrl: './modal-filter.page.html',
  styleUrls: ['./modal-filter.page.scss'],
})
export class ModalFilterPage implements OnInit {

  campo: string;
  expresion: string;
  valor: string;

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  salir() {
   
    this.modalCtrl.dismiss({
      campo: this.campo,
      expresion: this.expresion,
      valor: this.valor
    });
  }

}
