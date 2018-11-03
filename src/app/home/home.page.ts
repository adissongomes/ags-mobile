import {Component, ElementRef} from '@angular/core';
import {Input, ModalController} from '@ionic/angular';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {Slab} from '../models/slab';
import {DatatablesComponent} from '../components/datatables/datatables.component';
import {ResultComponent} from '../components/result/result.component';
import {CalculationService} from '../serivces/calculation.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    formGroup: FormGroup = new FormGroup({
        lx: new FormControl(4),
        ly: new FormControl(5),
        altura: new FormControl(10),
        contorno: new FormControl('TYPE_3'),
        caa: new FormControl('II'),
        aco: new FormControl('CA50'),
        fck: new FormControl(25),
        q: new FormControl(1.5),
        gConcreto: new FormControl(25),
        gArg: new FormControl(20),
        gMat: new FormControl(18),
        e: new FormControl(25),
        earg: new FormControl(21),
        emat: new FormControl(18),
        alpha: new FormControl(0.9)
    });

    constructor(public modalController: ModalController, private calculationService: CalculationService) {
    }

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

    submit() {
        const slab = new Slab();
        slab.lx = this.formGroup.get('lx').value;
        slab.ly = this.formGroup.get('ly').value;
        slab.altura = this.formGroup.get('altura').value;
        slab.contorno = this.formGroup.get('contorno').value;
        slab.caa = this.formGroup.get('caa').value;
        slab.aco = this.formGroup.get('aco').value;
        slab.fck = this.formGroup.get('fck').value;
        slab.q = this.formGroup.get('q').value;
        slab.gConcreto = this.formGroup.get('gConcreto').value;
        slab.gArg = this.formGroup.get('gArg').value;
        slab.gMat = this.formGroup.get('gMat').value;
        slab.e = this.formGroup.get('e').value;
        slab.eArg = this.formGroup.get('earg').value;
        slab.eMat = this.formGroup.get('emat').value;
        slab.alpha = this.formGroup.get('alpha').value;

        console.log({message: 'request calculation', slab});
        this.calculationService.calculate(slab)
            .subscribe((response: Slab) => {
                console.log(response);
                this.showResult(response);
            },
            (error: HttpErrorResponse) => {
                console.error(error);
            }
        );
    }

    private async showResult(response: Slab) {
        const modal = await this.modalController.create({
            component: ResultComponent,
            componentProps: {
                result: response
            },
            showBackdrop: false
        });
        return await modal.present();
    }
}
