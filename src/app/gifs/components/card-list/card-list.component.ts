import { Component, Input } from '@angular/core';
import { Gif } from "../../interfaces/gif-response";

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html'
})
export class CardListComponent {

  @Input() gifList: Gif[] = [];

  constructor() {
    console.log(this.gifList);
  }

}
