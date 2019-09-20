import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersModule } from './characters/characters.module';
import { CharactersComponent } from './characters/characters/characters.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'characters' },
  { path: 'characters', component: CharactersComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes),
    CharactersModule ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
