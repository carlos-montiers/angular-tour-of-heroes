import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  topHeroes: Hero[] = [];

  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.getTopHeroes();
  }

  getTopHeroes() : void {
    // passes the emitted array to the callback
    this.heroService.getHeroes().subscribe((heroes : Hero[]) => {
      this.topHeroes = heroes.slice(1, 5)
    });
  }

}
