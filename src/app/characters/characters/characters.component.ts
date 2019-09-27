import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MarvelService } from 'src/app/services/marvel.service';
import { Character } from 'src/app/interfaces/character';
import { fromEvent,  } from 'rxjs';
import { debounceTime, map, filter } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
 

  @ViewChild('charactersList') scrollableList: ElementRef;
  characters: Character[];
  suggestions: Character[] = new Array<Character>();
  queryField: FormControl = new FormControl();
  private charactersToShow: Character[];
  private actualPage: number;
  private readonly charPerPage = 20;

  

  constructor(private marvelService: MarvelService, private router: Router) { }

  ngOnInit() {
    this.charactersToShow = new Array<Character>();
    this.characters = new Array<Character>();
    this.loadCharacters();  
    this.actualPage = 0;  
    //TODO: mover a una directiva
    fromEvent(this.scrollableList.nativeElement, 'scroll').pipe(
      map((event: Event ) => {
      return event.target}),
      debounceTime(500),
      filter((res:Element) => (res.scrollHeight-res.scrollTop === res.clientHeight))      
   ).subscribe(success => this.onScroll()); 

   this.queryField.valueChanges.
   subscribe( result => {
    if (result.length>0)
      this.marvelService.getCharacters(20, result).subscribe((response) => {
        //cargar datos en la busqueda
        this.suggestions = response.data.results;
      },
      (err) => {
        console.log(err);
      //mostrar error
   })});

  }
  //sacar evento en ngOn

  loadCharacters(){
    this.marvelService.getCharacters(100).subscribe(
      (response) => {
        for(let i=0; i<response.data.results.length; i++){
          this.charactersToShow.push(response.data.results[i]);          
        }
        this.addCharactersToShow();
        

      },
      (err) => {
        console.log(err);
        //mostrar error
      }
    )
  }

  private addCharactersToShow(){
    var addFrom = this.actualPage*20;
    for(let i=0; i<this.charPerPage; i++){
      this.characters.push(this.charactersToShow[addFrom]);
      addFrom++;
    }
    this.actualPage++;
  }

  search(){
    this.charClicked(this.suggestions[0]);
  }

  charClicked(character:Character){
    console.log(character);
    this.router.navigate([character.id,"comics"],{ queryParams: { charInfo: character.name } });

  }

  private onScroll(){
    if (this.charactersToShow.length/this.charPerPage > this.actualPage){
      //cargo desde el arreglo
      this.addCharactersToShow();
    }
    else {
      //llamo a la api
      this.loadCharacters();
    }

  } 

}
