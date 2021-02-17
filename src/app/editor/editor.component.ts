import { Component, OnInit, Input } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { FormGroup, FormControl } from '@angular/forms';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  constructor(private router: Router, private adminService: AdminService) {}

  htmlContent = '';
  id = null;
  isEditing = false
  articleForm: FormGroup = new FormGroup({
    name: new FormControl(),
    categories: new FormControl(),
  });

  ngOnInit() {
      // this.route.params.subscribe(params => {
      //    console.log(params);
      // });
    //  console.log( this.router)
    
     const id = this.router.url.split("=")[1];
     if (id ) {
      this.adminService.getArticle(id).subscribe(article => {
        console.log(article)
        this.htmlContent = article.text;
        this.articleForm.setValue({name: article.name, categories: article.categories.join(", ")});
        this.isEditing = true;
        this.id= id;
      });
     }
  }

  submit() {
    if (this.isEditing === false) {
      this.adminService.createArticle(this.articleForm.value.name, this.articleForm.value.categories.split(",").map((e:string) => e.trim()), this.htmlContent)
    } else {
       this.adminService.updateArticle(this.id, this.articleForm.value.name, this.articleForm.value.categories.split(",").map((e:string) => e.trim()), this.htmlContent)
    }
  }
  
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
      ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };
}
