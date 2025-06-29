import { Gif } from "../interfaces/gif.interfaces";
import { GiphyItem } from "../interfaces/giphy.interfaces";

export class GifMapper {
    static mapGiphyItemToGif(item: GiphyItem): Gif {
        return {
            id: item.id,
            title: item.title,
            url: item.images.original.url
        }
    }


    static mapGiphyItemArrayToGif(items: GiphyItem[]): Gif[] {
        return items.map(this.mapGiphyItemToGif);

    }
}