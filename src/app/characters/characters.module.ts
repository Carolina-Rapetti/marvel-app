import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters/characters.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ComicsListComponent } from './comicsList/comicsList.component';
import { ComicComponent } from './comic/comic.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [CharactersComponent, ComicsListComponent, ComicComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [CharactersComponent]
})
export class CharactersModule { }
