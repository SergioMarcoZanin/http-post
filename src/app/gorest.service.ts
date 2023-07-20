import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GorestService {
  
  constructor(private http: HttpClient) { }

  post(data: any): Observable<any> {
    return this.http.post<any>(`
    https://gorest.co.in/public/v2/users/2185/posts?access-token=a85dd02584b2e8336b3bfbbab6f798aea6e774b953d5a69077cdca5d3c4fdec3`, data);
  }

  
  get(): Observable<any> {
    return this.http.get<any>(`https://gorest.co.in/public/v2/posts?access-token=a85dd02584b2e8336b3bfbbab6f798aea6e774b953d5a69077cdca5d3c4fdec3`);
  }


}
