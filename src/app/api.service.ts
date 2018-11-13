import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
    constructor(private http: HttpClient) { }
    
    postLocation(location) {
        console.log(location)
        this.http.post('http://localhost:61436/api/Locations', location).subscribe(res => {
            console.log(res);
        });
    }
    getLocation() {

        return this.http.get('http://localhost:61436/api/Locations');
    }
    putQuestion(location) {
        this.http.put(`http://localhost:61436/api/Locations/${location.id}`, location).subscribe(res => {
            console.log(res);
        });
    }

}
