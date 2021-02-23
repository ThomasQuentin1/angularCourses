import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-all-blogposts',
  templateUrl: './all-blogposts.component.html',
  styleUrls: ['./all-blogposts.component.css']
})
export class AllBlogpostsComponent implements OnInit {

  constructor(private http: HttpClient) { }
  post;
  ngOnInit(): void {
    this.http.get<any>('https://angularcourses-8527a-default-rtdb.europe-west1.firebasedatabase.app/article.json').subscribe(data => {
            let test = data;
            let keys = Object.keys(test)
            this.post = keys.map(k => test[k])
        })
  }

}
