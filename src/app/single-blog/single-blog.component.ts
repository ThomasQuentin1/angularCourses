import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';

@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.css']
})
export class SingleBlogComponent implements OnInit {

  constructor(private http: HttpClient, private location:Location) { }
  post;
  route;
  ngOnInit(): void {
    this.route = this.location.getState()
    console.log("this.route =", this.route)
    this.http.get<any>('https://angularcourses-8527a-default-rtdb.europe-west1.firebasedatabase.app/article.json').subscribe(data => {
            let test = data;
            let keys = Object.keys(test)
            let all_post =  keys.map(k => test[k])
            for (let post of all_post) {
              console.log(post.name, this.route.name)
              if (post.name == this.route.name) {
                this.post = post
                console.log(this.post.name)
                break;
              }
            }
        })
  }
  get Post() {
    return (this.post)
  }
}
