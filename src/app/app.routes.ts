import { Routes } from '@angular/router';
import { IlvlcalculatorComponent } from './ilvlcalculator/ilvlcalculator.component';
import { AboutComponent } from './about/about.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';

IlvlcalculatorComponent

export const routes: Routes = [
    { path: 'ilvlcalculator', component: IlvlcalculatorComponent },
    { path: 'about', component: AboutComponent },
    { path: '', redirectTo: '/ilvlcalculator', pathMatch: 'full' },
    { path: '**', component: FourOhFourComponent },

];
