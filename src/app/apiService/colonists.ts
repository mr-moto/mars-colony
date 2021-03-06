import{ Injectable} from '@angular/core';
import { Http, Headers, Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Colonist, NewColonist } from '../models';
import { COLONISTS_URL } from '../models/API'

interface ColonistPostRequest {
    colonist: NewColonist;
}

@Injectable()
export class ColonistAPIService {

    constructor(private http: Http){}


    saveColonist(newColonist: ColonistPostRequest): Observable<Colonist> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json')
        return this.http.post(COLONISTS_URL, newColonist, { headers }).map((res: Response) => res.json().colonist);
    }
}