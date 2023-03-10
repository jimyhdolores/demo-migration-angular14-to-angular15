import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IResponseCharacter } from '../../services/rick-and-morty-api.interface';
import { RickAndMortyApiService } from '../../services/rick-and-morty-api.service';

@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.scss'],
})
export class CharacterPageComponent implements OnInit {
  constructor(
    private _rickAndMortyApiService: RickAndMortyApiService,
    private _router: ActivatedRoute
  ) {}

  character$!: Observable<IResponseCharacter>;

  ngOnInit(): void {
    const id = this._router.snapshot.params['id'] as number;
    this.character$ = this._rickAndMortyApiService.getCharacter(id);
  }
}
