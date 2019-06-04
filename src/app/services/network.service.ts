import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor(private http: HttpClient) { }

  /**
   *Http post request
   *
   * @param {string} url Api url
   * @param {{}} params Params which sent to API
   * @returns
   * @memberof NetworkService
   */
  post(url: string, params: {}) {
    return this.http.post(url, params);
  }

}
