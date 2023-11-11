import { Routes } from '@angular/router';
import { IlvlcalculatorComponent } from './ilvlcalculator/ilvlcalculator.component';
import { AboutComponent } from './about/about.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { FfxPlayerSearchComponent } from './ffx-player-search/ffx-player-search.component';
import { FfxPlayerViewComponent } from './ffx-player-view/ffx-player-view.component';


IlvlcalculatorComponent

export const routes: Routes = [
    { path: 'ilvlcalculator', component: IlvlcalculatorComponent },
    { path: 'ffx-player-search', component: FfxPlayerSearchComponent },
    { path: 'ffx-player-view/:id', component: FfxPlayerViewComponent },
    { path: 'about', component: AboutComponent },
    { path: '', redirectTo: '/ilvlcalculator', pathMatch: 'full' },
    { path: '**', component: FourOhFourComponent },

];
