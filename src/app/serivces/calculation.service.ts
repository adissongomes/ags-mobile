import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Slab} from '../models/slab';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CalculationService {

    constructor(private http: HttpClient) {
    }

    calculate(slab: Slab): Observable<Slab> {
        return this.http.post<Slab>(`http://webslab.herokuapp.com/api/calculation`, slab);
        // return this.http.post<Slab>(`${environment.apiUrl}/calculation`, slab);
    }
}
