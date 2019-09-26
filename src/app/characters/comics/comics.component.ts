import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/interfaces/character';
import { MarvelService } from 'src/app/services/marvel.service';
import { Comic } from 'src/app/interfaces/comic';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {
  private charId: string;
  characterInfo: string;
  comicsList: Comic[] = new Array<Comic>();

  constructor(private route:ActivatedRoute, private marvel: MarvelService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.charId = params["id"];
      console.log("ID",this.charId);
      //llamar api
      this.marvel.getComicByChar(this.charId).subscribe((response) => {
        this.comicsList = response.data.results;
        console.log(this.comicsList);
      },
      (err) => {
        //mostrar error
      })
    });
    this.route.queryParams.subscribe(qp => {
      this.characterInfo = qp["charInfo"];
      console.log("char",this.characterInfo);
      //llamar api
    });
  }

}
