import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  constructor(private http: HttpClient) {}

  getAllCountries() {
    this.http
      .get('https://github.com/fabian7593/CountryAPI')
      .subscribe((res) => {});
  }
}
