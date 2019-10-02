import { Component, OnInit, OnDestroy } from '@angular/core';
import { Comic } from 'src/app/interfaces/comic';
import { MarvelService } from 'src/app/services/marvel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'src/app/interfaces/character';
import { Subscription } from 'rxjs';

interface Creator {
  resourceURI: string;
  name: string;
  role: string
}
@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit, OnDestroy {
  comic: Comic;
  artists: Creator[];
  writers: Creator[];

  private subscriptions: Subscription;

  constructor(private marvel: MarvelService, private route: ActivatedRoute, private router:Router) {
   this.subscriptions = new Subscription();
  }

  ngOnInit() {
    this.subscriptions.add(this.route.params.subscribe(params => {
      var comicId = params["id"];
      this.marvel.getComicById(comicId).subscribe((response) =>{
        this.comic = response.data.results[0];
        this.artists = this.comic.creators.items.filter(this.isArtist);
        this.writers = this.comic.creators.items.filter(this.isWritter);
      })
    }));
  }

  ngOnDestroy(){
    this.subscriptions.unsubscribe();
  }

  private isWritter(element: Creator){
    return element.role === "writer";

  }
  private isArtist(element: Creator){
    return (element.role !== "writer" && element.role !== "editor");
  }

  charClicked(char:Character){
    this.router.navigate([char.id,"comics"],{ queryParams: { charInfo: char.name } });
  }

}
