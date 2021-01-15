import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(email: string, password: string, app: string) {

    const headers = {
      'Accept': 'application/json',
      password,
      app
    };

    const requestOptions = {
      headers: new HttpHeaders(headers)
    };


      return this.http.put(`https://dev.tuten.cl:443/TutenREST/rest/user/${email}`, null, requestOptions);
  }
}
