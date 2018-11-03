import {Component, ElementRef, Input, OnInit, RendererType2, ViewChild} from '@angular/core';
import {Slab} from '../../models/slab';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

    @Input() result: Slab;
    @ViewChild('canvas') canvasElement: ElementRef<HTMLCanvasElement>;

    constructor(private modalController: ModalController) {
    }

    ngOnInit() {
        if (this.result) {
            this.drawRepresentation();
        }
    }

    close() {
        this.modalController.dismiss();
    }

    private drawRepresentation() {
        console.log('Representacao para laje...');
        console.log('n1: ' + this.result.n1);
        console.log('n2: ' + this.result.n2);

        const canvas = this.canvasElement.nativeElement;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.strokeRect(40, 40, 100, 120);

        ctx.beginPath();
        // n1
        ctx.moveTo(105, 40);
        ctx.lineTo(105, 160);
        // n2
        ctx.moveTo(40, 120);
        ctx.lineTo(140, 120);
        ctx.closePath();
        ctx.stroke();

        ctx.font = '10pt sans-serif';
        ctx.fillText(this.result.n1, 105, 30);
        ctx.fillText(this.result.n2, 150, 120);
    }

}
