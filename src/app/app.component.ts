import { Planet } from './planets';
import { AppService } from './app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'game-collection';


  displayedColumns: string[] = ['name', 'terrain', 'population', 'climate', 'action'];
  dataSource?: any;

  constructor(
    private readonly appService: AppService
  ){}

  ngOnInit(): void {
    this.getPlanets();
  }

  getPlanets() {
    this.appService.getPlanets().subscribe(res => this.dataSource = res.results);
  }

  deletePlanet(planetToDelete?: Planet) {
    this.dataSource = this.dataSource.filter((planet: Planet) => planet.name !== planetToDelete?.name)
  }

}
