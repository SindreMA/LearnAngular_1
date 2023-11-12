import { StoreModule } from '@ngrx/store';
import { ffxReducer } from '../state/ffx/reducer';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { SearchComponent } from './ffx-player-search/search/search.component';

 
@NgModule({
  declarations: [AppComponent, SearchComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ ffx: ffxReducer }, {})
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}