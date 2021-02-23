import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private http: HttpClient) { }
  post;
  ngOnInit(): void {
    this.http.get<any>('https://angularcourses-8527a-default-rtdb.europe-west1.firebasedatabase.app/article.json').subscribe(data => {
            let test = data;
            let keys = Object.keys(test)
            this.post = keys.map(k => test[k])
            this.post.splice(4.10)
        })
  }

}
