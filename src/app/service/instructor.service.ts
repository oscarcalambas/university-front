import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Course } from '../domain/course';
import { environment } from 'src/environments/environment';
import { Instructor } from '../domain/instructor';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  public url: string;
  constructor(public httpClient: HttpClient) {
    //this.url = './assets/MOCK_DATA.json';
    // this.url = 'http://localhost/University.web/api/courses';
    this.url = environment.apiUrl + 'api/Instructor/';
    
  }
  public getAll(): Observable<any> {
    return this.httpClient.get(this.url);
  }

public getById(id: number): Observable<any> {
  return this.httpClient.get(this.url + id);
};
  public save(instructor:Instructor): Observable<any>{
    return this.httpClient.post(this.url, instructor);

  }
  public edit(instructor: Instructor):Observable<any> {
    return this.httpClient.put(this.url + instructor.ID, instructor);
  };
  
public delete(id: number) {
  return this.httpClient.delete(this.url + id);
};
}
