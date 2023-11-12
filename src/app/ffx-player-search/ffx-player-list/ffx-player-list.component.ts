import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterSearch } from '../../../types/ffx/charactersearchresult';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FfxPlayerListItemComponent } from './ffx-player-list-item/ffx-player-list-item.component';

@Component({
  selector: 'app-ffx-player-list',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule, FfxPlayerListItemComponent],
  templateUrl: './ffx-player-list.component.html',
  styleUrl: './ffx-player-list.component.scss'
})
export class FfxPlayerListComponent {
    @Input() data: CharacterSearch[];
    @Input() loading: boolean;

}
