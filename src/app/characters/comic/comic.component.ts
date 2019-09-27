import { Component, OnInit } from '@angular/core';
import { Comic } from 'src/app/interfaces/comic';
import { MarvelService } from 'src/app/services/marvel.service';
import { ActivatedRoute } from '@angular/router';

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
export class ComicComponent implements OnInit {
  comic: Comic;
  artists: Creator[];
  writers: Creator[];

  constructor(private marvel: MarvelService, private route: ActivatedRoute) {
   
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      var comicId = params["id"];
      this.marvel.getComicById(comicId).subscribe((response) =>{
        this.comic = response.data.results[0];
        this.artists = this.comic.creators.items.filter(this.isArtist);
        this.writers = this.comic.creators.items.filter(this.isWritter);
        console.log(this.comic);
      })
    });
  }
  private isWritter(element: Creator){
    return element.role === "writer";

  }
  private isArtist(element: Creator){
    return (element.role !== "writer" && element.role !== "editor");
  }

}
