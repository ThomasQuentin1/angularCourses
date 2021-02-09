import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const dbUrl = "https://angularcourses-8527a-default-rtdb.europe-west1.firebasedatabase.app/";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  public createArticle(name: string, categories: string[], text: string)
  {
    return this.http.post(`${dbUrl}/article.json`, {name, categories, text, creationDate: new Date(), lastEditDate: new Date()}).subscribe();
  }

  public getArticles() : Observable<any[]>
  {
    return this.http.get<any[]>(`${dbUrl}/article.json`);
  }
}
