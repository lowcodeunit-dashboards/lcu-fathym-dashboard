import { Injectable } from '@angular/core';
import { LcuModel } from '../models/lcu.model';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LcuService {

  constructor(private http: HttpClient) { 

  }

  // The link to the Document360 help article for Fathym Dashboard; including api_token in querystring
  private docUrl:string = "https://apihub.document360.io/v1/articles/18bd1c15-ae4d-462f-9adb-837af2edfb07?api_token=Nztkwjz3ep7m/nJEhJkIN9ZzQcZ5kW87Qcf91P0206pe/TvUQ5kRrLpAjCCJlmmh/ZFmsa8LMTE5RQbWqzEeDDaJoKbggKJquBQF6DDsQF/glBL6vyfTfAO7UxJ3drLEn7plNcCxEkgHTgDcI78nPQ==";
  private reqParams:HttpParams = new HttpParams().set('Content-Type', 'application/json')

  // Get the Document360 help article for Fathym Dashboard
  public getData(reqParams?: HttpParams): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.docUrl, {params:this.reqParams});
  }

}
