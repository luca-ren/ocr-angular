import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {

  name = 'Appareil';
  status = 'Statut';

  constructor(private appareilService: AppareilService,
              private route: ActivatedRoute) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    const id = this.route.snapshot.params.id;
    // @ts-ignore
    this.name = this.appareilService.getAppareilById(+id).name;
    // @ts-ignore
    this.status = this.appareilService.getAppareilById(+id).status;
  }

}
