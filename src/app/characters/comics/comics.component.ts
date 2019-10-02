import { Component, OnInit, OnDestroy } from '@angular/core';
import { Comic } from 'src/app/interfaces/comic';
import { ActivatedRoute } from '@angular/router';
import { MarvelService } from 'src/app/services/marvel.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit, OnDestroy {
  private charId: string;
  characterInfo: string;
  comicsList: Comic[] = new Array<Comic>();
  private subscriptions:Subscription;

  constructor(private route:ActivatedRoute, private marvel:MarvelService) {
    this.subscriptions = new Subscription();
   }

  ngOnInit() {
    this.subscriptions.add(this.route.params.subscribe(params => {
      this.charId = params["id"];
      this.marvel.getComicByChar(this.charId).subscribe((response) => {
        this.comicsList = response.data.results;
      },
      (err) => {
        //mostrar error
      })
    }));

    this.subscriptions.add(this.route.queryParams.subscribe(qp => {
      this.characterInfo = qp["charInfo"];
      //llamar api
    }));
  }

  ngOnDestroy(){
    this.subscriptions.unsubscribe();
  }

}
