import { Component } from '@angular/core';
import { MenuOptions } from '../../../interfaces/menu-options.interface';

@Component({
  selector: 'gifs-side-menu-options',
  imports: [],
  templateUrl: './gifs-side-menu-options.component.html',
})
export class GifsSideMenuOptionsComponent {
  menuOptions: MenuOptions[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      route: '/dashboard/trending',
      sublabel: 'Popular Gifs',
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Search',
      route: '/dashboard/search',
      sublabel: 'Search gifs',
    },
  ];
}
