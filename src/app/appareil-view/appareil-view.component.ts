import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  constructor(private appareilService: AppareilService) { }
  appareils ?: any[];
  isAuth = false;


  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.appareils = this.appareilService.appareils;
  }

  onAllumer(): void {
    this.appareilService.switchOnAll();
  }
  // @ts-ignore
  // tslint:disable-next-line:typedef
  onEteindre() {
    if (confirm('Etes-vous sûr de vouloir éteindre tout les appareils ?')){
      this.appareilService.switchOffAll();
    } else {
      return null;
    }
  }

}
