import {ArmorData} from './armor-data';
import {Armor} from './armor';
import {LoadData} from './load-data';
import {ArrowData} from './arrow-data';
import {WeightData} from './weightData';
import {LimitData} from './limit-data';
import {Moment} from './moment';

export class Slab {

    lx: Number;
    ly: Number;
    contorno: string;
    balanco: false;
    altura: Number;
    gConcreto: Number;
    espessuraConcreto: Number;
    gArg: Number;
    espessuraArgamassa: Number;
    gMat: Number;
    espessuraMaterial: Number;
    e: Number;
    eArg: Number;
    eMat: Number;
    pesosEspecificos: WeightData;
    limites: LimitData;
    caa: string;
    lambda: Number;
    classe: string;
    aco: string;
    fck: Number;
    q: Number;
    carregamento: LoadData;
    momento: Moment;
    armadura: Armor;
    dadosArmaduraLx: ArmorData;
    dadosArmaduraLy: ArmorData;
    flecha: ArrowData;
    n1: string;
    n2: string;
    alpha: Number;
}
