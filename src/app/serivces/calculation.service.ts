import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Slab} from '../models/slab';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CalculationService {

    constructor(private http: HttpClient) {
    }

    calculate(slab: Slab): Observable<HttpResponse<Slab>> {
        return this.http.post<Slab>('http://localhost:8080/calculate', slab, {observe: 'response'});
    }
}
