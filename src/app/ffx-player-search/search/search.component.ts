import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import axios from 'axios';
import furball from 'wa-furball';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, SearchComponent, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
    playerSearch = ''
    serverInput = ''

    @Output() onSearch: EventEmitter<any> = new EventEmitter();

    search() {
        if (!this.playerSearch) return furball.error("Please enter a character name");
        if (!this.serverInput) return furball.error("Please select a server");
        const result = this.fetchPlayers(this.playerSearch);
        this.onSearch.emit(result);
    }

    async fetchPlayers(playerSearch: string) {
        const result = await axios.get(`https://xivapi.com/character/search?name=${playerSearch}&server=${this.serverInput}`)
        return result.data;
    }

    async fetchServers() {
        const result = await axios.get(`https://xivapi.com/servers`)
        return result.data;
    }
}
