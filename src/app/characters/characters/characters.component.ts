import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MarvelService } from 'src/app/services/marvel.service';
import { Character } from 'src/app/interfaces/character';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit, OnDestroy {
 

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ngOnDestroy(){

  }
  //sacar evento en ngOn
  charClicked(char:Character){
    this.router.navigate([char.id,"comics"],{ queryParams: { charInfo: char.name } });
    //this.router.navigate([char.id,"comics"]);
  }

}
