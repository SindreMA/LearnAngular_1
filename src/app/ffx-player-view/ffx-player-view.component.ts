import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import axios from 'axios';
import { CharacterResult } from '../../types/ffx/characterresult';

@Component({
  selector: 'app-ffx-player-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ffx-player-view.component.html',
  styleUrl: './ffx-player-view.component.scss'
})
export class FfxPlayerViewComponent implements OnInit {
    player: CharacterResult['Character'];
    async ngOnInit() {
        const id = parseInt(window.location.pathname.split('/').pop());
        const result = await this.fetchPlayer(id);
        this.player = result.Character;        
    }

    async fetchPlayer(id: number) {
        const result = await axios.get<CharacterResult>(`https://xivapi.com/character/${id}`)
        return result.data;
    }

    jobsWithLevels = () => this.player.ClassJobs.filter((job) => job.Level > 0);

}
