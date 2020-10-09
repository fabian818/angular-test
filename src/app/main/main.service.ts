import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class MainService {
    constructor(private http: HttpClient) { }

    configUrl = 'https://api.github.com/repos/fabian818/github-test/commits';

    getCommits() {
      return this.http.get(this.configUrl);
    }
}