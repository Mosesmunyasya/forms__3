import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {}
    submitUserData(data:any): Observable<any>{
      return this.http.post(this.ApiUrl,data);
    }
   
}
