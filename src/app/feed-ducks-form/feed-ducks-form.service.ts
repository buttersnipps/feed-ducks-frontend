import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class FeedDucksFormService {

    url: string = 'https://feed-ducks-app.herokuapp.com/ducks/save'
    constructor(private http: HttpClient) { }
  
    saveForm(obj) : Observable<any>{
        return this.http.post(this.url, obj);
    }
  }