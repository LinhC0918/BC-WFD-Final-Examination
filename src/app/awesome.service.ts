import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IAwesome} from './iawesome';

@Injectable({
    providedIn: 'root'
})
export class AwesomeService {
    private readonly API_URL = 'http://localhost:3000/awesomes';

    constructor(private http: HttpClient) {
    }

    getAwesome(): Observable<IAwesome[]> {
        return this.http.get<IAwesome[]>(this.API_URL);
    }

    getAwesomeById(id: number): Observable<IAwesome> {
        return this.http.get<IAwesome>(`${this.API_URL}/${id}`);
    }

    deleteAwesome(id: number): Observable<any> {
        return this.http.delete(`${this.API_URL}/${id}`);
    }

    createAwesome(awesome: Partial<IAwesome>): Observable<IAwesome> {
        return this.http.post<IAwesome>(this.API_URL, awesome);
    }

    editAwesome(awesome: IAwesome): Observable<IAwesome> {
        return this.http.patch<IAwesome>(`${this.API_URL}/${awesome.id}`, awesome);
    }


}
