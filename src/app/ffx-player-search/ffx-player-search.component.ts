import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { FfxPlayerListComponent } from './ffx-player-list/ffx-player-list.component';
import { CharacterSearchResult } from '../../types/ffx/charactersearchresult';

@Component({
  selector: 'app-ffx-player-search',
  standalone: true,
  imports: [CommonModule, SearchComponent, FfxPlayerListComponent],
  templateUrl:  './ffx-player-search.component.html',
  styleUrl: './ffx-player-search.component.scss'
})
export class FfxPlayerSearchComponent {
    data: CharacterSearchResult;

    setData(data: CharacterSearchResult) {
        this.data = data;
    }

    loading: boolean = false;

    setLoading(loading: boolean) {
        this.loading = loading;
    }
}
