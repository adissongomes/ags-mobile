import {Component, ElementRef} from '@angular/core';
import {Input, ModalController} from '@ionic/angular';
import {DatatablesComponent} from '../components/datatables/datatables.component';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(public modalController: ModalController) {}

    async openWeightDialog(inputElement: Input) {
        console.log({message: `select weight for element`, el: inputElement});

        const modal = await this.modalController.create({
            component: DatatablesComponent,
            componentProps: {
                inputElement: inputElement,
            },
            showBackdrop: false
        });
        return await modal.present();
    }

}
