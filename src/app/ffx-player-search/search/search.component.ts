import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import axios from 'axios';
import furball from 'wa-furball';
import { MatSelectModule } from '@angular/material/select';
import { Store, select } from '@ngrx/store';
import { setServers } from '../../../state/ffx/actions';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, SearchComponent, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {
    playerSearch = ''
    serverInput = ''

    servers$: string[];

    constructor(private store: Store<{ ffx }>) {
        console.log(store);
        
        store.select('ffx').subscribe((res) => {
            this.servers$ = res?.ffx?.servers;
        });
        
    }

    async ngOnInit() {
        console.log(this.servers$);
        
        if (!this.servers$) {
            this.servers$ = await this.fetchServers();
            this.servers$.sort();
        }
    }


    @Output() onSearch: EventEmitter<any> = new EventEmitter();

    @Output() onLoading: EventEmitter<any> = new EventEmitter();

    async search() {       
        if (!this.playerSearch) return furball.error("Please enter a character name");
        if (!this.serverInput) return furball.error("Please select a server");
        this.onLoading.emit(true);
        const result = await this.fetchPlayers(this.playerSearch);
        this.onLoading.emit(false);
        this.onSearch.emit(result);
    }

    async fetchPlayers(playerSearch: string) {
        const result = await axios.get(`https://xivapi.com/character/search?name=${playerSearch}&server=${this.serverInput}`)
        return result.data;
    }

    async fetchServers() {
        const result = await axios.get(`https://xivapi.com/servers`)
        //this.store.dispatch(setServers(result.data));
        return result.data;
    }
}
