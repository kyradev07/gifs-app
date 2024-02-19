import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-lazy-images',
  templateUrl: './lazy-images.component.html'
})
export class LazyImagesComponent {

  @Input() url!: string;
  @Input() alt: string = 'No Title';

  isLoading: boolean = true;

  onLoad(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

}
