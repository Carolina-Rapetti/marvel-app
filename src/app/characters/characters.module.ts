import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters/characters.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ComicsComponent } from './comics/comics.component';


@NgModule({
  declarations: [CharactersComponent, ComicsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [CharactersComponent]
})
export class CharactersModule { }
