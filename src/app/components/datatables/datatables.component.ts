import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

export const WEIGHT = 'weight';
export const AGGREGATE = 'aggretate';

@Component({
  selector: 'app-datatables',
  templateUrl: './datatables.component.html',
  styleUrls: ['./datatables.component.scss']
})
export class DatatablesComponent implements OnInit {

    /**
     * @type {'weight'|'aggregate'}
     * Type of table to be showed.
     */
    @Input() datatableType = WEIGHT;
    @Input() inputElement;

    constructor(public modalController: ModalController) {}

    ngOnInit() {
    }

    selectValue(value) {
        console.log({message: `select weight ${value}`, el: this.inputElement});
        if (this.inputElement) {
            this.inputElement.value = value;
            this.modalController.dismiss();
        }
    }

    close() {
        this.modalController.dismiss();
    }
}