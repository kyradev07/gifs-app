import { Component, Input } from '@angular/core';
import { Gif } from "../../interfaces/gif-response";

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html'
})
export class CardComponent {

  @Input() gif!: Gif;

}
