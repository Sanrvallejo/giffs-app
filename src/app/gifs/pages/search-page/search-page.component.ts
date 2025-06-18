import { Component, inject, signal } from '@angular/core';
import { GifListComponent } from '../../components/gif-list/gif-list.component';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif.interfaces';

@Component({
  selector: 'app-search-page',
  imports: [GifListComponent],
  templateUrl: './search-page.component.html',
})
export default class SearchPageComponent {
  gifService = inject(GifsService);

  gif = signal<Gif[]>([]);

  onSearch(query: string) {
    console.log(query);
    this.gifService.searchGifs(query).subscribe((resp) => {
      this.gif.set(resp);
    });
  }
}
