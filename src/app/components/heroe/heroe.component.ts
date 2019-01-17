import { Component,  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent  {

  heroe:any = {};
  heroes:Heroe[] = [];

  constructor( private activatedRouter: ActivatedRoute,
               private _heroesService: HeroesService ) 
  { 
    this.activatedRouter.params.subscribe( params => {
      this.heroe = this._heroesService.getHeroe(params['id']);
      console.log(this.heroe);
    });
  }
}
