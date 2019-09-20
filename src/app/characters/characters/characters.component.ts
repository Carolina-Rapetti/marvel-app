import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/services/marvel.service';
import { Character } from 'src/app/interfaces/character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  //characters: Character[];
  characters: Character[];


  constructor(private marvelService: MarvelService) { }

  ngOnInit() {
    this.loadCharacters();    
  }

  loadCharacters(){
    this.marvelService.getCharacters(20).subscribe(
      (response) => {
        this.characters=  response.data.results;
        console.log(this.characters);

      },
      (err) => {
        console.log(err);
        //mostrar error
      }
    )
  }

}
