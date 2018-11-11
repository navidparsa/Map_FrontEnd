import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface Location {
  latitude: string;
  longitude: string;
  country_name: string;
  city: string;
}

@Injectable({
  providedIn: 'root'
})
export class MapService {
  constructor(private http: HttpClient) {}
  getCurrentLocation() {
    return this.http.get<Location>('https://ipapi.co/json/');
  }
}