import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
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
  charClicked(char:Character){
    this.router.navigate([char.id,"comics"],{ queryParams: { charInfo: char.name } });
  }

}
