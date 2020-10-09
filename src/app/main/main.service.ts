import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from './../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class MainService {
    constructor(private http: HttpClient) { }

    apiUrl = environment.apiUrl;

    getCommits() {
      return this.http.get(this.apiUrl);
    }
}