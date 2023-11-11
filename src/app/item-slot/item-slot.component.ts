import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-item-slot',
  standalone: true,
  imports: [CommonModule, MatInputModule],
  templateUrl: './item-slot.component.html',
  styleUrl: './item-slot.component.scss'
})

export class ItemSlotComponent implements OnInit, OnChanges {
    @Input() value!: number | undefined;
    @Input() slotName!: string;
    @Input() disabled!: boolean;
    @Output() onChange: EventEmitter<any> = new EventEmitter();

    imageCss!: string;
    val: number;

    ngOnChanges(changes: SimpleChanges) {
        if (changes['value']) {
            this.val = changes['value'].currentValue;
        }
    }

    onValChange(event: any): boolean {
        const oldVal = this.val;
        const newVal = event.target.value;
        if (newVal > 999) {
            event.preventDefault();
            event.target.value = oldVal;
            return false;
        }
        
        this.val = newVal || 0;
        this.onChange.emit(parseInt(`${this.val}`));
        return true;
    }


    ngOnInit(): void {
        this.imageCss = `background-image: url(\"assets/slots/${this.slotName.toLowerCase()}.png\");`;
        if (this.disabled) this.val = undefined;
    }
}
