import { Component, OnInit, Input } from '@angular/core';
import { Character } from 'src/app/interfaces/character';

@Component({
  selector: 'app-char-card',
  templateUrl: './char-card.component.html',
  styleUrls: ['./char-card.component.css']
})
export class CharCardComponent implements OnInit {

  @Input()
  character: Character;

  constructor() { }

  ngOnInit() {
  }

}
