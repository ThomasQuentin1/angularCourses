import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const dbUrl = "https://angularcourses-8527a-default-rtdb.europe-west1.firebasedatabase.app";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  public createArticle(name: string, categories: string[], text: string, author : string)
  {
    return this.http.post(`${dbUrl}/article.json`, {name, categories, text, creationDate: new Date(), lastEditDate: new Date(), author},).subscribe();
  }

  public updateArticle(id : string , name: string, categories: string[], text: string, author: string)
  {
    return this.http.patch(`${dbUrl}/article/${id}.json`, {name, categories, text, lastEditDate: new Date(), author}).subscribe();
  }

  public deleteArticle(id: string)
  {
    return this.http.delete(`${dbUrl}/article/${id}.json`).subscribe();
    // https://angularcourses-8527a-default-rtdb.europe-west1.firebasedatabase.app/article/-MTjLV8eTksER6OQg3p0.json
  }

  public getArticles() : Observable<any>
  {
    return this.http.get<any>(`${dbUrl}/article.json`);
  }

  public getArticle(id: string) : Observable<any>
  {
    return this.http.get<any>(`${dbUrl}/article/${id}.json`);
  }
}
