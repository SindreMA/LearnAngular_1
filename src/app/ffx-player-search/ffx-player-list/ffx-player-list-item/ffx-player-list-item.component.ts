import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterSearch } from '../../../../types/ffx/charactersearchresult';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-ffx-player-list-item',
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterModule, RouterLink],
  templateUrl: './ffx-player-list-item.component.html',
  styleUrl: './ffx-player-list-item.component.scss'
})
export class FfxPlayerListItemComponent implements OnInit {
    @Input() player!: CharacterSearch;

    profileLink: string = '';
    
    ngOnInit() {
        this.profileLink = `/ffx-player-view/${this.player?.ID}`;
    }
}
