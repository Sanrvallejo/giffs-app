import { Component, input } from '@angular/core';

@Component({
  selector: 'gif-ist-item',
  imports: [],
  templateUrl: './gif-ist-item.component.html',
})
export class GifIstItemComponent { 

  imageUrl = input.required<string>();
}
