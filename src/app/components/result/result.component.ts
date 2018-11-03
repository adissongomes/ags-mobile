import { Component, OnInit } from '@angular/core';
import {Slab} from '../../models/slab';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  result: Slab;
  constructor() { }

  ngOnInit() {
  }

}
