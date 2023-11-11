import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
    navItems: {link: string, label: string}[] = [
        {link: '/ilvlcalculator', label: 'iLvl Calculator'},
        {link: '/ffx-player-search', label: 'FFX Player Search'},
        {link: '/about', label: 'About'},
    ]

    public pathname: string = "";

    ngOnInit() {
        this.pathname = window.location.pathname.toLowerCase();
    }

}
