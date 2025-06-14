import { Component, input } from '@angular/core';
import { GifIstItemComponent } from "./gif-ist-item/gif-ist-item.component";

@Component({
  selector: 'gif-list',
  imports: [GifIstItemComponent],
  templateUrl: './gif-list.component.html',
})
export class GifListComponent { 

  gifs = input.required<string[]>();
}
