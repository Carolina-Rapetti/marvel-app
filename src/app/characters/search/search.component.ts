import { Component, OnInit, OnDestroy } from '@angular/core';
import { Character } from 'src/app/interfaces/character';
import { Subject, Subscription } from 'rxjs';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  results: Character[];
  searchTerm$ = new Subject<string>();
  private subscriptions: Subscription;

  constructor(private marvel: MarvelService) {
    this.subscriptions = new Subscription();
   }

  ngOnInit() {
    this.subscriptions.add(this.marvel.search(this.searchTerm$)
      .subscribe(results => {
        this.results = results.data.results;
      }));
  }
  ngOnDestroy(){
    this.searchTerm$.unsubscribe();
    this.subscriptions.unsubscribe();
  }

  search(value:string){
    if(value.length>0)
      this.searchTerm$.next(value);
      else this.results = [];
  }

  onClick(){
    this.results = [];
  }

}
