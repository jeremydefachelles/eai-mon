import { Injectable } from '@angular/core';
import * as modelp from '../processes-component/processes-model';
//import { PROCESSES } from '../mocks/ProcessesMock';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProcessesService {

  /*
    getProcesses(){
       console.log("getPlatforms");
       return Promise.resolve(PROCESSES);
    }
    */
  private platformUrl = 'http://web-eaimonitoring/rest/ProcessTracking/searchProcesses';
  constructor(private http: Http) { }

  getProcesses(request: modelp.ProcessRequest): Observable<modelp.Process[]> {
    console.log("getProcesses");
    let sReq = JSON.stringify(request);
    let headers = new Headers({ 'Content-Type': 'application/json;odata=verbose' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.platformUrl, sReq, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.processes || {};
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
