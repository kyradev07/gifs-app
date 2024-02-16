import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from "../../services/gifs.service";

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html'
})
export class SearchBoxComponent {

  // Referencia directa al tag Html, para este caso, el input
  @ViewChild('tagInput') tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifService: GifsService) {
  }

  searchTag(): void {
    const tag: string = this.tagInput.nativeElement.value;
    this.gifService.searchTag(tag);
    this.tagInput.nativeElement.value = '';
  }

}
