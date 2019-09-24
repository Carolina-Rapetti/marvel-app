import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters/characters.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CharactersComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [CharactersComponent]
})
export class CharactersModule { }
