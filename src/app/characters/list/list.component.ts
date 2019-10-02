import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Character } from 'src/app/interfaces/character';
import { MarvelService } from 'src/app/services/marvel.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent<T> implements OnInit, OnDestroy {

  @Input()
  infinite_scroll: boolean;  
  @Output() clicked = new EventEmitter<Character>();

  scrollCallback;

  list: Character[];
  private charactersToShow: Character[];
  private actualPage: number;
  private readonly charPerPage = 20;

  private subscriptions: Subscription;

  constructor(private marvelService: MarvelService) { 
    this.subscriptions = new Subscription();
    
  }

  ngOnInit() {
    this.charactersToShow = new Array<Character>();
    this.list = new Array<Character>();
    this.actualPage = 0; 
    this.loadCharacters();      
    this.scrollCallback = this.onScroll.bind(this);
  }

  ngOnDestroy(){
    this.subscriptions.unsubscribe();
  }

  loadCharacters(){
    this.subscriptions.add(this.marvelService.getCharacters(100).subscribe(
      (response) => {
        Array.prototype.push.apply(this.charactersToShow, response.data.results);        
        this.addCharactersToShow();
      },
      (err) => {
        console.log(err);
        //mostrar error
      }
    ));
  }

  private addCharactersToShow(){
    var addFrom = this.actualPage*20;
    Array.prototype.push.apply(this.list, this.charactersToShow.slice(addFrom,addFrom+20));
    this.list.push(this.charactersToShow[addFrom]); 
    this.actualPage++;
  }

  onClick(item:Character){
    this.clicked.emit(item);

  }

  onScroll(){
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
