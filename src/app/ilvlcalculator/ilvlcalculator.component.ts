import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ItemSlotComponent } from '../item-slot/item-slot.component';
import { CharImportComponent } from '../char-import/char-import.component';
import { CharacterResult } from '../../types/bestkeystone/character';

@Component({
  selector: 'app-ilvlcalculator',
  templateUrl: './ilvlcalculator.component.html',
  styleUrl: './ilvlcalculator.component.scss',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ItemSlotComponent, CharImportComponent],  
})
export class IlvlcalculatorComponent {
    data: any = {};
    charData: CharacterResult;

    handleSlotChange(slotName: string, value: number): void {
        this.data[slotName.toLowerCase()] = value;
    }
    
    getTotalIlvl(): number {
        return Object.values(this.data).reduce((a: number, b: number) => a + b, 0) as number;
    }

    handleImport(data: any) {
        this.charData = data;
        data.details.equipment.forEach((item: any) => {
            const slot = item.slot.toLowerCase();
            if (this.totalSlots.map(x=> x.toLowerCase()).includes(slot)) {
                this.data[slot] = item.item_level;
            }
        });
    }

    getCharImage(): string {
        if (!this.charData) return '';
        const url = this.charData.details.render_url;
        return `background-image: url("${url}")`;
    }

    getAverageIlvl(): number {
        let length = this.totalSlots.length - this.notCountedSlots.length;
        if (!this.data['off_hand']) length = length - 1;
        
        const avg = this.getTotalIlvl() / length;

        return Math.round(avg * 100) / 100;
    }

    isDisabled(slot: string): boolean {
        return this.notCountedSlots.includes(slot);
    }

    weaponSlots = [
        'Main_Hand',
        'Off_Hand',
    ]

    notCountedSlots = [
        'Shirt',
        'Tabard',
    ]

    commonSlots = [
        'Head',
        'Neck',
        'Shoulder',
        'Back',
        'Chest',
        ...this.notCountedSlots,
        'Wrist',
        'Hands',
        'Waist',
        'Legs',
        'Feet',
        'Finger_1',
        'Finger_2',
        'Trinket_1',
        'Trinket_2',      
    ]

    totalSlots = [
        ...this.weaponSlots,
        ...this.commonSlots,
    ]
    



}
