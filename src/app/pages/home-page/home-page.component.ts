import { Component, OnInit } from '@angular/core';
import { ICharacter } from '../../services/rick-and-morty-api.interface';
import { RickAndMortyApiService } from '../../services/rick-and-morty-api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(public pokeApiService: RickAndMortyApiService) {}
  characters: ICharacter[] = [];

  ngOnInit(): void {
    this.pokeApiService.getAllCharacter().subscribe((response) => {
      this.characters = response;
    });
  }
}
