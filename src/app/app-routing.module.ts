import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersModule } from './characters/characters.module';
import { CharactersComponent } from './characters/characters/characters.component';
import { ComicsListComponent } from './characters/comicsList/comicsList.component';
import { ComicComponent } from './characters/comic/comic.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'characters' },
  { path: 'characters', component: CharactersComponent},
  { path: ':id/comics', component: ComicsListComponent},
  { path: 'comic/:id', component: ComicComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes),
    CharactersModule ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
