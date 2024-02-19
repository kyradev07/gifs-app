import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Gif, GifResponse } from "../interfaces/gif-response";
import { delay } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private readonly url: string = 'https://api.giphy.com/v1/gifs/search';
  private readonly API_KEY: string = 'FzrfOO4Atc1WZi1u5QxmktkbaKr7vOay';
  private readonly limit: number = 10;
  private _tagsHistory: string[] = [];
  gifList: Gif[] = [];

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
  }

  get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  searchTag(tag: string): void {
    const newTag: string = tag.trim().toLowerCase();
    if (this.isValidTag(newTag)) {
      this.organiceHistory(newTag);
      const params: HttpParams = new HttpParams()
      .set('api_key', this.API_KEY)
      .set('q', tag)
      .set('limit', this.limit);
      this.http.get<GifResponse>(this.url, { params })
      .subscribe((response: GifResponse) => {
        this.gifList = response.data;
      });

      // Espera para continuar el flujo, por lo tanto el after se imprime luego de terminar la petición
      /*const response = await fetch('http://api.giphy.com/v1/gifs/search?api_key=FzrfOO4Atc1WZi1u5QxmktkbaKr7vOay&q=age of empire&limit=10');
      const data = await response.json();
      console.log(data);*/

      // No espera para terminar el flujo, por lo tanto imprime after aún sin terminar la petición
      /*fetch('http://api.giphy.com/v1/gifs/search?api_key=FzrfOO4Atc1WZi1u5QxmktkbaKr7vOay&q=age of empire&limit=10')
        .then((value: Response) => value.json())
        .then(value => console.log(value))*/

    }
  }

  private isValidTag(tag: string): boolean {
    return tag.length !== 0
  }

  private organiceHistory(tag: string): void {
    if (!this._tagsHistory.includes(tag)) {
      this._tagsHistory.unshift(tag);
    }
    this._tagsHistory = this._tagsHistory.slice(0, 10);
    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage(): void {
    if (localStorage.getItem('history')) {
      this._tagsHistory = JSON.parse(localStorage.getItem('history')!);
      this.searchTag(this._tagsHistory[0]);
    }
  }
}
