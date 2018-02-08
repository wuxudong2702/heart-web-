import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class ApiServeService {

  constructor(private http: HttpClient) { }
  // const url: string = '';\
  
  getData(): Promise<any> {
    const url: string = '/api/admin/auth/login';
    console.log('api-serve login');
    return this.http.post(url, {})
      .toPromise()
      .then(data => {
        return data;
      })
      .catch((error: any): Promise<any>=>{
        return Promise.reject(error);
      })
  }
}
