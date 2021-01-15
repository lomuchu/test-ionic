import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TutenService {

  constructor(
    private http: HttpClient
  ) { }


  getData() {

    const user = JSON.parse(localStorage.getItem('user'));
    const app = JSON.parse(localStorage.getItem('app'));

    const headers = {
      'Accept': 'application/json',
      'adminemail': user.email,
      'app': app,
      'token': user.sessionTokenBck
    };

    const requestOptions = {
      headers: new HttpHeaders(headers)
    };


      return this.http.get(`https://dev.tuten.cl:443/TutenREST/rest/user/contacto@tuten.cl/bookings?current=true`, requestOptions);
  }
}
