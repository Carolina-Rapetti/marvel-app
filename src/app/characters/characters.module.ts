import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters/characters.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ComicsComponent } from './comics/comics.component';
import { ComicComponent } from './comic/comic.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { CharCardComponent } from './char-card/char-card.component';
import { InfiniteScrollerDirective } from '../directives/infinite-scroller.directive';
import { ClickoutsideDirective } from '../directives/clickoutside.directive';



@NgModule({
  declarations: [CharactersComponent, 
    ComicsComponent, 
    ComicComponent, 
    SearchComponent, 
    ListComponent, 
    CharCardComponent,    
    InfiniteScrollerDirective,    
    ClickoutsideDirective,
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [CharactersComponent]
})
export class CharactersModule { }
