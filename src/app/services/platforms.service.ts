import { Injectable } from '@angular/core';
import * as model from '../model/model';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// MOCK
//import { PLATFORMS } from '../mocks/PlatformsMock'

@Injectable()
export class PlatformsService {
  private platformUrl = 'http://web-eaimonitoring/rest/Flow';
  constructor(private http: Http) { }

  getPlatforms(): Observable<model.Platform[]> {
    console.log("getPlatforms");
    //     return Promise.resolve(PLATFORMS);

    return this.http.get(this.platformUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.platform || {};
  }

  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
