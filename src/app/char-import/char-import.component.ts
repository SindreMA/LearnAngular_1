import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import axios from 'axios';
import furball from 'wa-furball';
import { Season } from '../../types/bestkeystone/season';
import { CharacterResult } from '../../types/bestkeystone/character';
import { Realm } from '../../types/bestkeystone/realm';

@Component({
  selector: 'app-char-import',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatSelectModule, MatButtonModule],
  templateUrl: './char-import.component.html',
  styleUrl: './char-import.component.scss'
})
export class CharImportComponent implements OnInit {
    @Output() onImport: EventEmitter<any> = new EventEmitter();

    name: string = "";
    region: string = "";
    realm: string = "";

    realms: {value: string, label: string}[] = [];

    seasons: Season[] = [];

    apiUrl = false ?  `localhost:8585` : `bestkeystone.com`
    https = 'https'

    ngOnInit(): void {
        this.fetchSeasons();        
    }

    async fetchSeasons() {
        const result = await axios.get(`${this.https}://${this.apiUrl}/api/Periode/Seasons`)
        this.seasons = result.data;
    }

    async fetchCharacter() {
        const result = await axios.get<CharacterResult>(`${this.https}://${this.apiUrl}/api/Player/full?character=${this.name}&realm=${this.realm}&region=${this.region}&season=${this.seasons[0].id}`)
        return result.data;
    }
    
    handleImport(event?: any) {
        if (event) event.preventDefault();
        if (!this.name) return furball.error("Please enter a character name");
        if (!this.region) return furball.error("Please select a region");
        if (!this.realm) return furball.error("Please select a realm");

        this.fetchCharacter().then((data) => {
            this.onImport.emit(data);
        });
    }

    async fetchRealms() {
        const result = await axios.get<Realm[]>(`${this.https}://${this.apiUrl}/api/Realm/all?region=${this.region}`)
        this.realms = result.data.map((realm: any) => ({value: realm.slug, label: realm.name}));
    }

    handleNameChange(event) {
        const value = event.target.value;
        this.name = value;
    }

    handleRegionChange({value}) {
        this.region = value;
        this.fetchRealms();
    }

    handleRealmChange({value}) {
        this.realm = value;
    }
}
